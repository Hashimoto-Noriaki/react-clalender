import { Dispatch, SetStateAction,useState } from "react"
import { addMonths } from "date-fns"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { PrimaryBtn } from '../atoms/PrimaryBtn'
import { CreateScheduleModal } from '../../components/organisms/CreateScheduleModal'

type PropsType = {
    setCurrentDate:Dispatch<SetStateAction<Date>>
}

export const CalendarNav = ({ setCurrentDate }: PropsType) => {
    const [isOpen,setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const changeToday = () => setCurrentDate(new Date())
    const chengePrevMonth = () =>
        setCurrentDate((prevDate) => addMonths(prevDate,-1))
    const changeNextMonth = () =>
        setCurrentDate((prevDate) => addMonths(prevDate, 1))

  return (
    <div className="w-[80%] flex justify-between mb-2">
        <div className="flex text-white gap-4 items-center">
            <FaArrowAltCircleLeft 
                className="text-lime-800 text-2xl"
                onClick={chengePrevMonth}
            />
                <PrimaryBtn size="sm" onClick={changeToday}>
                    今日
                </PrimaryBtn>
            <FaArrowAltCircleRight 
                className="text-lime-800 text-2xl"
                onClick={changeNextMonth}
            />
        </div>
        <PrimaryBtn onClick={() => setIsOpen(true)}>
            予定作成
        </PrimaryBtn>
        <CreateScheduleModal
            isOpen={isOpen}
            closeModal={closeModal}
        />
    </div>
  )
}
