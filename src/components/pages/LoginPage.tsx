import { Input } from '../atoms/Input'
import { PrimaryBtn } from '../atoms/PrimaryBtn'

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
        <form className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-lime-800 font-bold text-3xl text-center">ログイン</h1>
            <div className="w-[80%]">
                <Input
                    type="text"
                    placeholder="メールアドレス"
                />
            </div>
            <div className="w-[80%]">
                <Input
                    type="password"
                    placeholder="パスワード"
                />
            </div>
            <PrimaryBtn onClick={() => null}>ログイン</PrimaryBtn>
        </form>
    </div>
  )
}