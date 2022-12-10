import {render,screen} from "@testing-library/react";
import { assert } from "console";
import Greet from "./index";

test('Greet renders Hello',()=>{
    const {container} = render(<Greet />); //render the Greet component in the virtual DOM
    const helloElement = container.getElementsByTagName("h3")[0]; //getting element by id tag className is not a recommended approach as we are relying on implementation details to test our component
    
    //There should be atleast one h3 element present in the DOM
    expect(helloElement).toBeInTheDocument();
    
    //It's textContent should be equal to "Hello"
    //expect(helloElement.textContent).toEqual("Hello");
    expect(helloElement.textContent).toMatch(/hello/i); // match the text content to a regular expression

})