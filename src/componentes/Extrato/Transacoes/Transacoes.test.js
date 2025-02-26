import { render, screen } from "@testing-library/react";
import  Transacoes from './index';
import estilos from '../Extrato.module.css';

describe("Transacoes", ()=>{
    test("Deve mostrar depósitos e também transferências", ()=>{
        const transaction = { transacao:"Depósito", valor: 100};
        const {rerender} = render(<Transacoes estilos={estilos} transacao={transaction}/>);
        const typeTransaction =  screen.getByTestId("tipoTransacao");
        const valueTransaction =  screen.getByTestId("valorTransacao");
        expect(typeTransaction).toHaveTextContent("Depósito");
        expect(valueTransaction).toHaveTextContent("R$ 100");

        /*Testing if component is rendering different props received */
        const transaction2 = { transacao:"Transferência", valor: 75};
        rerender(<Transacoes estilos={estilos} transacao={transaction2}/>);
        expect(typeTransaction).toHaveTextContent("Transferência");
        expect(valueTransaction).toHaveTextContent("- R$ 75");
    });
});
