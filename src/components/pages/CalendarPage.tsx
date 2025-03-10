import { getMonth } from 'date-fns'
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'
import { useCalendar } from '../../hooks/useCalendar'
import { CalendarNav } from '../organisms/CalendarNav'
import { useState } from "react";

export const CalendarPage = () => {
    const [currentDate,setCurrentDate] = useState(new Date())
    const { dateList } = useCalendar({ currentDate: currentDate })
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">{`${(getMonth(currentDate))+ 1}月`}</h1>
            <CalendarNav setCurrentDate={setCurrentDate}/>
            <table className="w-[80%] border-solid border-collapse border-2 border-lime-800 table-fixed">
                <CalendarHeader/>
                <CalendarBody  currentDate={currentDate} dateList={dateList}/>
            </table>
        </>
    )
}
