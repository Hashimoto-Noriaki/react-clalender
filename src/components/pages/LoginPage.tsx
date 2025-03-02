import { ChangeEvent,useState } from 'react'
import { Input } from '../atoms/Input'
import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { LoginInfoType } from '../../type/login'

export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>({
        email:"",
        password:"",
    })

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>) => {
        const { name,value } = event.target
        setLoginInfo({...loginInfo,[name]: value})
    }

    

  return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
        <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-lime-800 font-bold text-3xl text-center">ログイン</h1>
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
                    value={LoginInfo.password}
                    onChange={changeLoginInfo}
                />
            </div>
            <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
        </form>
    </div>
  )
}