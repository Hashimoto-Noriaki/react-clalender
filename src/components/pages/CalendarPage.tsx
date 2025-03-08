import { getMonth,getDate, eachWeekOfInterval,eachDayOfInterval,startOfMonth,endOfMonth,endOfWeek } from 'date-fns'
import { DAYS_LIST } from '../../constants/calendar'
import { useEffect, useState} from 'react'

export const CalendarPage = () => {
   const today = new Date()
   const [dateList,setDateList] = useState<Date[][]>([])

    useEffect(() => {
        const monthOfSundayList = eachWeekOfInterval({
            start: startOfMonth(today),
            end: endOfMonth(today),
        });
        const newDateList: Date[][] =  monthOfSundayList.map((date)=> {
            return eachDayOfInterval({
                start: date,
                end: endOfWeek(date),
            })
        })
        setDateList(newDateList)
    },[])
  return (
    <>
        <h1 className="font-bold text-3xl mb-5">{`${(getMonth(today))+ 1}月`}</h1>
        <table className="w-[80%] border-solid border-collapse border-2 border-lime-800 table-fixed">
            <thead>
                <tr className="bg-lime-800 text-white rounded-tl-lg rounded-tl-rg py-10">
                    {DAYS_LIST.map((day) => (
                        <th key={day} className="text-center text-xl py-3">
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dateList.map((oneWeek) => (
                    <tr key={`week-${getDate(oneWeek[0])}`} className="mx-10">
                        {oneWeek.map((item) => (
                            <td
                                key={`day-${getDate(item)}`}
                                className="bg-white h-[10vh] border-2 border-solid border-lime-800"
                            >
                                <span className="inline-block w-[20px] leading-[20px] text-center">
                                    {getDate(item)}
                                </span>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}
