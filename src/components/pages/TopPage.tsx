import React from 'react'

export const TopPage = () => {
  return (
    <div>
        <header>
            <div className="flex justify-between">
                <p>利用スケジュール</p>
                <nav>
                    <ul className="flex gap-5">
                        <li>利用開始</li>
                        <li>ログイン</li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}