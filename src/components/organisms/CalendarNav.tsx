import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"

export const CalendarNav = () => {
  return (
    <div>
        <div>
            <FaArrowAltCircleLeft/>
                <button>今日</button>
            <FaArrowAltCircleRight/>
        </div>
    </div>
  )
}