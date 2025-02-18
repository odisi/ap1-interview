import { TransferDate } from "./transfer-date";

describe('transfer-date', () => {
  const transferDate = new TransferDate();

  test('same date', () => {
    const input = new Date();

    const expected = input;

    const rs = transferDate.same(input)

    expect(rs).toEqual(expected);
  });
})