import { HolidayProvider } from "./utils/holiday-provider";

export class TransferDate {

    private holidayProvider: HolidayProvider;

    constructor(holidayProvider: HolidayProvider) {
      this.holidayProvider = holidayProvider;
    }

    // Função responsável por verifivar se o dia do repasse cai em um final de semana, sendo Sábado = 6 e Domingo = 0
    private isWeekend(date: Date): boolean {
      return date.getDay() === 6 || date.getDay() === 0;
    }
  
  
    // Função responsável por calcular um novo dia útil caso o dia do repasse caia em um feriado ou final de semana, soma um dia à data até encontrar um dia útil
    private getNextBusinessDay(date: Date): Date {
      while (this.isWeekend(date) || this.holidayProvider.isHoliday(date)) {
        date.setDate(date.getDate() + 1);
      }
      return date;
    }
  
    //Função responsável por calcular o dia do repasse com base nas regras estabelecidas
    public calculateTransferDate(checkinDate: Date): Date {
      const day = checkinDate.getDate();
      const month = checkinDate.getMonth();
      const year = checkinDate.getFullYear();
    
      let transferDate: Date;
    
      if (day <= 15) { 
        transferDate = new Date(year, month + 1, 0);
      } else {
        transferDate = new Date(year, month + 1, 15);
      }
    
      return this.getNextBusinessDay(transferDate);
    }
  }