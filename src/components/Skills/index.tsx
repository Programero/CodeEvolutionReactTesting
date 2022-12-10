import React from 'react'
import {SkillsProps} from "./skills.types";

function Skills(props:SkillsProps) {
  return (
    <>
        <div>Skills</div>
        <ul>
            {
                props.skills.map(skill=>(<li key={skill}>{skill}</li>))
            }
        </ul>
    </>
  )
}

export default Skills