import {render,screen} from "@testing-library/react";
import Skills from ".";

describe("Skills",()=>{
    const skills=["HTML","CSS","Javascript"];
    
    //check if the unordered list is getting rendered
    test("UnorderedList getting rendred correctly",()=>{
        render(<Skills skills={skills}/>)
        let ulElement = screen.getByRole("list"); //the default role of ul HTMLElement is "list"
        expect(ulElement).toBeInTheDocument()
    })

    //check if the all the list items are getting rendered correctly
    test("All list items are getting rendred correctly",()=>{
        render(<Skills skills={skills}/>)
        let liElements = screen.getAllByRole("listitem"); //the default role of li HTMLElement is "listitem"
        expect(liElements).toHaveLength(skills.length); 
    })
})