import { ChangeEvent,useState } from 'react'
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Input } from '../atoms/Input';

export const LoginPage = () => {
    const [loginInfo,setLoginInfo] = useState<LoginInfoType>{
        email:"",
        password:"",
    }

    const changeLoginInfo = (event: ChangeEvent<HTMLInputElement>)=> {
        const { name,value } = event.target;
        setLoginInfo({...LoginInfo,[name]:value})
    }

    return (
        <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
            <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl text-lime-800 font-bold text-center">
                ログイン
            </h1>
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
            <PrimaryBtn>ログイン</PrimaryBtn>
            </form>
        </div>
    );
};
