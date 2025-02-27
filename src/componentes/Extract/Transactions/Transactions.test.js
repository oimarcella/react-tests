import { render, screen } from "@testing-library/react";
import  Transactions from './index';
import styles from '../Extrato.module.css';

describe("Transactions", ()=>{
    test("Must show deposit and transfers", ()=>{
        const transaction = { transaction:"Depósito", value: 100};
        const {rerender} = render(<Transactions styles={styles} transaction={transaction}/>);
        const typeTransaction =  screen.getByTestId("tipoTransacao");
        const valueTransaction =  screen.getByTestId("valorTransacao");
        expect(typeTransaction).toHaveTextContent("Depósito");
        expect(valueTransaction).toHaveTextContent("R$ 100");

        /*Testing if component is rendering different props received */
        const transaction2 = { transaction:"Transferência", value: 75};
        rerender(<Transactions styles={styles} transaction={transaction2}/>);
        expect(typeTransaction).toHaveTextContent("Transferência");
        expect(valueTransaction).toHaveTextContent("- R$ 75");
    });
});
