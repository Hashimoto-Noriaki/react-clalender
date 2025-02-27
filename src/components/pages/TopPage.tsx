import { PrimaryBtn } from '../atoms/PrimaryBtn.tsx';

export const TopPage = () => {
  return (
    <div className="text-center">
        <h1 className="logo text-7xl">スケジュール管理</h1>
        <p className="text-5xl pt-[20vh]">
            スケジュール管理をする
        </p>
        <PrimaryBtn>ログイン</PrimaryBtn>
    </div>
  )
}