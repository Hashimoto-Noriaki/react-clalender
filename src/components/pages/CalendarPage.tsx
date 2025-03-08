import { getMonth, eachWeekOfInterval, startOfMonth, endOfMonth, eachDayOfInterval, endOfWeek,isSameDay } from 'date-fns';
import { useEffect, useState } from 'react';
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'
import { getScheduleList } from '../../api/calendar'

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

        const scheduleList = getScheduleList()
            scheduleList.forEach((schedule) => {
                const firstIndex = newDateList.findIndex((oneWeek) =>
                    oneWeek.some((item) => isSameDay(item.date, schedule.date))
                )
                if(firstIndex === -1) return;
                const secondIndex = newDateList[firstIndex].findIndex((item) =>
                    isSameDay(item.date,schedule.date)
                )

                newDateList[firstIndex][secondIndex].schedules = [
                    ...newDateList[firstIndex][secondIndex].schedules,
                    schedule,
                ]
            })
            setDateList(newDateList);
    },  []);

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
