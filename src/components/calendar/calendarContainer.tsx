import React from 'react';
import { Calendar, CalendarTypeView } from './types';

interface ICalendar {
    options: Calendar,
    changeView(typeView: CalendarTypeView): void,
    changeMonth(month: number): void,
    changeYear(year: number): void,
    changeWeek(week: number): void,
    changeDay(day: number): void,
    updateLoadingStateCalendar(isLoading: boolean): void
}

export default function CalendarContainer({options}: ICalendar) {
    const { month, year, week, day, typeView, bookings, rules, isLoading, range } = options;

    // const renderViewMonth = () =
}