import { getMonth } from 'date-fns'
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'
import { useCalendar } from '../../hooks/useCalendar'
import { CalendarNav } from '../organisms/CalendarNav'

export const CalendarPage = () => {
    const today = new Date()
    const { dateList } = useCalendar({ currentDate: today })
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">{`${(getMonth(today))+ 1}月`}</h1>
            <CalendarNav/>
            <table className="w-[80%] border-solid border-collapse border-2 border-lime-800 table-fixed">
                <CalendarHeader/>
                <CalendarBody  currentDate={today} dateList={dateList}/>
            </table>
        </>
    )
}
