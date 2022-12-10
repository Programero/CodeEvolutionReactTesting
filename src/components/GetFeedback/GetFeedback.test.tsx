import {render,screen} from "@testing-library/react";
import GetFeedback from ".";

describe('Feedback',()=>{
    test('Renders Correctly',()=>{
        render(<GetFeedback />);
        
        //check if there's an input element in the DOM for collecting name
        let nameInputElement = screen.getByRole("textbox",{name:'Name'}); //input type="text" has a default role of "textbox"
        expect(nameInputElement).toBeInTheDocument();


        //using getByLabelText to check if the input element name is rendered in the DOM
        let nameInputElement2 = screen.getByLabelText(/name/i);
        expect(nameInputElement2).toBeInTheDocument();

        //check if there's a dropdown to collect job profile
        let jobDropDownElement = screen.getByRole("combobox"); //select by default has a role of "combobox"
        expect(jobDropDownElement).toBeInTheDocument();

        //check if there's a checkbox for aggreing to TnCs
        let checkBoxElement = screen.getByRole("checkbox");
        expect(checkBoxElement).toBeInTheDocument(); // input type="checkbox" has a default role of "checkbox"

        //check if there's a submit button
        let submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument(); //<button> HTMLElement has a default role of "button"

        //check if there's a textarea input element for collecting User's feedback
        let feedbackElement = screen.getByRole("textbox",{name:"Feedback"});
        expect(feedbackElement).toBeInTheDocument();

        //check if h1 and h3 headings exists to describe the page
        let h1Element = screen.getByRole("heading",{level:1});
        let h3Element = screen.getByRole("heading",{level:3});
        expect(h1Element).toBeInTheDocument();
        expect(h3Element).toBeInTheDocument();

    })
})