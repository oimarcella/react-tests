import {render, screen} from "@testing-library/react";
import Header from ".";

test("Should render name of logged user", ()=>{
    render(<Header/>);
    const userName = screen.getByText("Joana Fonseca Gomes");
    expect(userName).toBeInTheDocument();
});