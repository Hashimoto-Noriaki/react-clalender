import { useNavigate } from 'react-router-dom'
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const TopPage = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center">
      <h1 className="logo text-7xl">スケジュール管理APP</h1>
      <p className="text-5xl pt-[20vh]">スケジュールの管理をします。</p>
      <div className="pt-[20vh]">
        <PrimaryBtn size="lg" onClick={() => navigate("/login")}>ログイン</PrimaryBtn>
      </div>
    </div>
  )
}