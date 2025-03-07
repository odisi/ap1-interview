import { HolidayProvider } from "./holiday-provider";

export class DefaultHolidayProvider implements HolidayProvider {
    private holidays: string[];

    constructor() {
        this.holidays = [
            '2024-01-01', 
            '2024-04-21', 
            '2024-05-01', 
            '2024-09-07', 
            '2024-10-12', 
            '2024-11-02', 
            '2024-11-15', 
            '2024-12-25', 
        ];
    }

    isHoliday(date: Date): boolean {
        return this.holidays.includes(date.toISOString().split('T')[0]);
    }    

    setHoliday(holidays: string[]) {
        this.holidays = holidays;
    }
}