import { NotLoginLayout } from '../templates/NotLoginLayout';

export const TopPage = () => {
  return (
    <NotLoginLayout>
        <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="logo text-7xl">スケジュール管理</h1>
                <p className="text-5xl pt-[20vh]">
                    スケジュール管理をする
                </p>
                <div className="pt-[20vh]">
                    <button className="bg-lime-800 text-white rounded-lg p-4 text-lg">ログイン</button>
                </div>
            </div>
        </main>
    </NotLoginLayout>
  )
}