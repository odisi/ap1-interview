import { TransferDate } from "./calculate-transfer-date";
import { DefaultHolidayProvider } from "./utils/default-holiday-provider";

describe("TransferDate", () => {
  const holidayProvider = new DefaultHolidayProvider;
  const transferDate = new TransferDate(holidayProvider);

  // Função para formatar as datas, afim de realizar os testes de maneira mais simples
  function getDateOnly(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  // Função auxiliar para facilitar o testador, retira o zero-based do mês, assim: Janeiro = 1, Fevereiro = 2...
  function createDate(year: number, month: number, day: number): Date {
    return new Date(year, month - 1, day); 
  }

  // Respectivos testes para testar os casos possíveis 
  test("Repasse no último dia do mês para check-in até o dia 15", () => {
    const checkin = createDate(2025,2,10);
    const expected = createDate(2025,2, 28);
    expect(getDateOnly(transferDate.calculateTransferDate(checkin))).toEqual(getDateOnly(expected));
  });

  test("Repasse no dia 15 do mês seguinte para check-in após o dia 15", () => {
    const checkin = createDate(2025,12, 20);
    const expected = createDate(2026,1, 15);
    expect(getDateOnly(transferDate.calculateTransferDate(checkin))).toEqual(getDateOnly(expected));
  });

  test("Repasse ajustado para o próximo dia útil se cair no final de semana", () => {
    const checkin = createDate(2025,5,1); 
    const expected = createDate(2025,6,2); 
    expect(getDateOnly(transferDate.calculateTransferDate(checkin))).toEqual(getDateOnly(expected));
  });

  test("Repasse ajustado para o próximo dia útil se cair em um feriado", () => {
    const checkin = createDate(2024,10,16); 
    const expected = createDate(2024,11,18); 
    expect(getDateOnly(transferDate.calculateTransferDate(checkin))).toEqual(getDateOnly(expected));
  });
});