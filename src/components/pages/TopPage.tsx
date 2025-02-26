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
        <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen">
            <div>
                <h1>スケジュール管理</h1>
                <p>
                    スケジュール管理をする
                </p>
                <div>
                    <button>ログイン</button>
                </div>
            </div>
        </main>
    </div>
  )
}