export interface HolidayProvider {
    isHoliday(date: Date): boolean;
}