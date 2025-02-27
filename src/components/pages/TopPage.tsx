import { useNavigate } from 'react-router-dom'
import { PrimaryBtn } from '../atoms/PrimaryBtn.tsx';

export const TopPage = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center">
        <h1 className="logo text-7xl">スケジュール管理</h1>
        <p className="text-5xl pt-[20vh]">
            スケジュール管理をする
        </p>
        <PrimaryBtn onClick={() => navigate("/login")}>ログイン</PrimaryBtn>
    </div>
  )
}