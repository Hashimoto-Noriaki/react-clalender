import { FormEvent,useState } from 'react'
import { useSetRecoilState } from 'recoil'
import {  useNavigate } from 'react-router-dom'
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from '../atoms/Input';
import { login } from '../../api/login'
import { LoginInfoType } from '../../types/login'
import { loginUserState } from '../../store/loginUserState'

export const LoginPage = () => {
    const navigate = useNavigate()
    const setLoginUser = useSetRecoilState(loginUserState)
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:"",
        password:"",
    })

    const [errorMessage,setErrorMessage] = useState("")

    //入力値をリアルタイムで loginInfo に反映。ユーザーがemailやpasswordを入力するとき
    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = event.target;//event.target.name と event.target.value を 一行で取得。
        setLoginInfo({...loginInfo,[name]:value})//スプレッド構文 ({ ...loginInfo }) を使って、元のデータを保持しつつnameに対応する部分だけ更新。[name]: valueを使うことで、emailかpasswordかを判断
    }

    //ログイン処理を実行 ログインボタンが押されたとき
    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        setErrorMessage("")
        event.preventDefault()
        try {
            const resUser= login(loginInfo)
            setLoginUser({id:resUser.id, name:resUser.name})
            navigate("/calendar")
        } catch {
            setErrorMessage("ログインに失敗しました。")
        }
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col justify-center items-center gap-10" onSubmit={handleLogin}>
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
            <PrimaryBtn size="lg" onClick={() => null}>ログイン</PrimaryBtn>
            </form>
        </div>
    );
};
