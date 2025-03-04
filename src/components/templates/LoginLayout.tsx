import { Link,Outlet,useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { loginUserState } from '../../store/loginUserState'; 
import { FaUser } from 'react-icons/fa';
import { MdLogOut } from 'react-icons/fa';

export const LoginLayout = () => {
    const navigate = useNavigate()
    const [loginUser,setLoginUser] = useRecoilState(loginUserState)

    const handleLogout = () => {
        setLoginUser ({id:0,name:""})
        navigate("/login")
    }

    return (
    <div className="relative">
    <header className="leading-[50px] fixed top-0 left-0 right-0 bg-white">
        <div className="container mx-auto flex justify-between">
            <p className="logo">
                <Link to="/">スケジュール管理App</Link>
            </p>
            <nav>
                <ul className="flex justify-center gap-5 text-lime-800">
                    <li className="flex items-center">
                        <FaUser/>
                        {loginUser.name}
                    </li>
                    <li className="flex items-center">
                        <MdLogOut/>
                        <a onClick={handleLogout}>ログアウト</a>
                    </li>
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
