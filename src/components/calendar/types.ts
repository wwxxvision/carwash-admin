
export type CalendarTypeView = 'month' | 'week' | 'day';
export type CalendarRules = {
    canView: boolean,
    canEdit: boolean,
    canExport: boolean,
}
export type CalendarDateRange = {
    from: string,
    to: string
}

export type Calendar = {
    month: number,
    year: number,
    week: number,
    day: number,
    typeView: CalendarTypeView,
    bookings: [],
    rules: CalendarRules,
    isLoading: boolean,
    range: CalendarDateRange, 
}