import { screen, render } from "@testing-library/react";
import Balance from "./index";

describe("Balance", ()=>{
    test("Should display balance using format R$ 1000/R$ 1400,50", ()=>{
        const {rerender} = render(<Balance balance={1000}/>);
        const balance = screen.getByTestId("saldo");
        expect(balance).toHaveTextContent("R$ 1000");

        rerender(<Balance balance={5300.50}/>);
        const balance2 = screen.getByTestId("saldo");
        expect(balance2).toHaveTextContent("R$ 5300,50");
    });
});