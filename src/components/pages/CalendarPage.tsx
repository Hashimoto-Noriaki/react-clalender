import { getMonth } from 'date-fns'
import { DAYS_LIST } from '../../constants/calendar'

export const CalendarPage = () => {
    const today = new Date()

    return(
        <>
            <h1 className="font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
            <table className="w-[80%] border-lime-800 border-solid border-2 border-collapse table-fixed">
                <thead>
                    <tr className="bg-lime-800 text-white text-xl rounded-tr-lg rounded-tl-lg py-10">
                        {DAYS_LIST.map((day) => (
                            <th key={day} className="text-center text-xl py-3">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </>
    )
}
