import {render, screen} from "@testing-library/react";
import Welcome from "./index";

test('Welcome without name prop test',()=>{
    render(<Welcome />);
    let h3Element = screen.getByText("Welcome!");
    expect(h3Element).toBeInTheDocument();
})

test('Welcome with name prop test',()=>{
    render(<Welcome name={"Kapil"}/>);
    let h3Element = screen.getByText("Welcome Kapil!");
    expect(h3Element).toBeInTheDocument();
})