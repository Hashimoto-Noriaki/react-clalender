import React from 'react'

export const TopPage = () => {
  return (
    <div className="relative">
        <header className="leading-[50px] fixed top-0 left-0 right-0 bg-white">
            <div className="container mx-auto flex justify-between">
                <p className="logo">利用スケジュール</p>
                <nav>
                    <ul className="flex gap-5 text-lime-800">
                        <li>利用開始</li>
                        <li>ログイン</li>
                    </ul>
                </nav>
            </div>
        </header>
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
    </div>
  )
}