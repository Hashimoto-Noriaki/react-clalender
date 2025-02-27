import { Link,Outlet } from 'react-router-dom'

export const NotLoginLayout = ( ) => {
  return (
    <div className="relative">
      <header className="bg-white leading-[50px] fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">
            <Link href="/">
              スケジュール管理App
            </Link>
          </p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>利用説明</li>
              <Link to="/login">
                <li>ログイン</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        <Outlet/>
      </main>
    </div>
  )
}