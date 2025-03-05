import { getMonth } from 'date-fns'

export const CalendarPage = () => {
    const today = new Date()
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${(getMonth(today)) + 1}月`}
            </h1>
        </>
    )
}
