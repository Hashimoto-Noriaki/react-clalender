import { ChangeEvent,useState } from 'react'
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from '../atoms/Input';
import { login } from '../../api/login'
import { LoginInfoType } from '../../types/login'

export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:"",
        password:"",
    })

    const [errorMessage,setErrorMessage] = useState("")

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = event.target;
        setLoginInfo({...loginInfo,[name]:value})
    }

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setErrorMessage("")
        try {
            login(loginInfo)
        } catch {
            setErrorMessage("ログインに失敗しました。")
        }
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col justify-center items-center gap-10" onClick={handleLogin}>
            <h1 className="text-3xl text-lime-800 font-bold text-center">
                ログイン
            </h1>
            {errorMessage !== "" && (
                <div className="p-5 text-white bg-red-500 w-[80%]">
                    { errorMessage }
                </div>
            )}
            <div className="w-[80%]">
                <Input
                    name="email"
                    type="text"
                    placeholder="メールアドレス"
                    value={loginInfo.email}
                    onChange={changeLoginInfo}
                />
            </div>
            <div className="w-[80%]">
                <Input
                name="password"
                type="password"
                placeholder="パスワード"
                value={loginInfo.password}
                onChange={changeLoginInfo}
                />
            </div>
            <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
            </form>
        </div>
    );
};
