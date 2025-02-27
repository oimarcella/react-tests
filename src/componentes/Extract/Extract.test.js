import { render, screen } from "@testing-library/react";
import  Extract from './index';

describe("Extract", ()=>{
    test("Should render list of transactions", ()=>{
        const transactions = [
            {
                transacao:'Depósito',
                valor:100,
            }
        ];
        
        render(<Extract transactions={transactions}/>);
        const list = screen.getByRole('listitem');
        expect(list).toBeInTheDocument();
    });
});