import {render, screen} from "@testing-library/react";
import Menu from "./index";

test("Should render link to homepage", ()=>{
    render(<Menu/>);
    const linkToHome = screen.getByText("Início");
    expect(linkToHome).toBeInTheDocument();
});

test("Should render list of 4 link in menu", ()=>{
    render(<Menu/>);
    const listLink = screen.getAllByRole("link");
    expect(listLink).toHaveLength(4);
});

test("Shouldn't render link to extract", ()=>{
    render(<Menu/>);
    const extractLink = screen.queryByText("Extrato");
    expect(extractLink).not.toBeInTheDocument();
});

test("Should render list of links with class .link", ()=>{
    render(<Menu/>);
    const links = screen.getAllByRole("link");
    links.forEach(link=> expect(link).toHaveClass("link"));
    expect(links).toMatchSnapshot()
});