import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from './index';


describe("Deve renderizar um campo de input",  ()=>{
    test("Deve existir o campo",() =>{
        render(<Formulario />);
        const input = screen.getByPlaceholderText("Digite um valor");
        expect(input).toBeInTheDocument();
    });
    test("Ser do tipo number", ()=>{
        render(<Formulario />);
        const input = screen.getByPlaceholderText("Digite um valor");
        expect(input).toHaveAttribute('type', 'number');
    });
    test("Pode ser preenchido pelo usuário", ()=>{
        render(<Formulario />);
        const input = screen.getByPlaceholderText("Digite um valor");
        userEvent.type(input, '50');
        expect(input).toHaveValue(50);
    });
});
