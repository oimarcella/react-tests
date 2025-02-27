import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from './index';


describe("Form",  ()=>{
    test("Must have a input to type amount",() =>{
        render(<Form />);
        const input = screen.getByPlaceholderText("Digite um valor");
        expect(input).toBeInTheDocument();
    });
    test("To be of type number", ()=>{
        render(<Form />);
        const input = screen.getByPlaceholderText("Digite um valor");
        expect(input).toHaveAttribute('type', 'number');
    });
    test("Can bee filled by user", ()=>{
        render(<Form />);
        const input = screen.getByPlaceholderText("Digite um valor");
        userEvent.type(input, '50');
        expect(input).toHaveValue(50);
    });
    test("Should submit a new transaction when user clicks Realizar Transferência", ()=>{
        //mocking function
        const submitTransaction = jest.fn();

        render(<Form submitTransaction={submitTransaction}/>);
        const button = screen.getByRole("button");
        userEvent.click(button);
        expect(submitTransaction).toHaveBeenCalledTimes(1);
    });
});
