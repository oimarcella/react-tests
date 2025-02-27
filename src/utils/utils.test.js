import { calculateNewBalance } from "./index";

describe("Function calculateNewBalance", ()=>{
    test("Should show correct balance", ()=>{
        const balance = 1000;
        const transaction = {transaction:"Depósito", value: 100};
        const transaction2 = {transaction:"Transferência", value: 100};

        const result = calculateNewBalance(transaction, balance);
        expect(result).toBe(1100);
        const result2 = calculateNewBalance(transaction2, balance);
        expect(result2).toBe(900);

    });
});