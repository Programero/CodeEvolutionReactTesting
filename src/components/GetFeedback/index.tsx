import React from 'react'

function GetFeedback() {
  return (
    <>
    <h1>User Feedback Form</h1>
    <h3>Section 1: </h3>
    <form>
        <label htmlFor="name">
            Name <input type="text" id="name"/>
        </label>
        <br />
        <label htmlFor="jobprofile">
            Job Profile
            <select id="jobprofile">
                <option value="UI/UX">UI/UX designer</option>
                <option value="FEE">FrontEnd Engineer</option>
                <option value="DevOps">DevOps Engineer</option>
            </select>
        </label>
        <br />
        <label htmlFor="feedback">
            Feedback
            <textarea name="feedback" id="feedback" cols={30} rows={10}></textarea>
        </label>

        <br />

        <label htmlFor="tnc">
            <input type="checkbox" name="tnc" id="tnc" /> I agree to the terms and conditions.
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default GetFeedback