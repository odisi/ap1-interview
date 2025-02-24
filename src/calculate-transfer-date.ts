export class TransferDate {

    // Função responsável por verifivar se o dia do repasse cai em um final de semana, sendo Sábado = 6 e Domingo = 0
    private isWeekend(date: Date): boolean {
      return date.getDay() === 6 || date.getDay() === 0;
    }
  
    // Função responsável po verificar se o dia do repasse cai em um feriado
    private isHoliday(date: Date): boolean {
      // Foi colocado apenas os feriados de 2024, afim do sistema ser testado corretamente
      const holidays = [
        '2024-01-01', // Ano Novo
        '2024-04-21', // Tiradentes
        '2024-05-01', // Dia do Trabalhador
        '2024-09-07', // Independência
        '2024-10-12', // Nossa Senhora Aparecida
        '2024-11-02', // Finados
        '2024-11-15', // Proclamação da República
        '2024-12-25', // Natal
      ];
      return holidays.includes(date.toISOString().split('T')[0]);
    }
  
    // Função responsável por calcular um novo dia útil caso o dia do repasse caia em um feriado ou final de semana, soma um dia à data até encontrar um dia útil
    private getNextBusinessDay(date: Date): Date {
      while (this.isWeekend(date) || this.isHoliday(date)) {
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