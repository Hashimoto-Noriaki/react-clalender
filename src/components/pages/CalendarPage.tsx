import { getMonth } from 'date-fns'
import { DAYS_List } from '../../constants/calendar'

export const CalendarPage = () => {
    const today = new Date()
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">{`${(getMonth(today)) + 1}月`}</h1>
            <table>
                <thead>
                    <tr>
                        {DAYS_List.map((day) => {
                            <th key={day}>
                                {day}
                            </th>
                        })}
                    </tr>
                </thead>
            </table>
        </>
    )
}
