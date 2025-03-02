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

    //入力値をリアルタイムで loginInfo に反映。ユーザーがemailやpasswordを入力するとき
    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = event.target;//event.target は 変更があった <input> 要素name → 変更された <input> の name 属性（"email" または "password"） value → 変更された <inp ut> の入力値
        setLoginInfo({...loginInfo,[name]:value})//スプレッド構文 ({ ...loginInfo }) を使って、既存のデータをコピー。[name]: value によって、email または password だけを更新
    }

    //ログイン処理を実行 ログインボタンが押されたとき
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
