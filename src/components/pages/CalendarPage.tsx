import { getMonth, eachWeekOfInterval, startOfMonth, endOfMonth, eachDayOfInterval, endOfWeek } from 'date-fns';
import { useEffect, useState } from 'react';
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'

export const CalendarPage = () => {
    const today = new Date();
    const [dateList, setDateList] = useState<Date[][]>([]);

    useEffect(() => {
        const monthOfSundayList = eachWeekOfInterval({
            start: startOfMonth(today),
            end: endOfMonth(today),
        });

        // 各週の日付リストを作成
        const newDateList = monthOfSundayList.map((date) => {
            return eachDayOfInterval({
                start: date,
                end: endOfWeek(date),
            });
        });
        setDateList(newDateList);
    }, [today]);

    return (
        <>
            <h1 className="font-bold text-3xl mb-5">{`${getMonth(today) + 1}月`}</h1>
            <table className="w-[80%] border-lime-800 border-solid border-2 border-collapse table-fixed">
                <CalendarHeader/>
                <CalendarBody currentDate={today} dateList={dateList}/>
            </table>
        </>
    );
};
