import uniquid from "uniquid"
import { useState } from "react"

export default function Experience({
    key,
    company,
    from,
    to,
    setExpSections,
    expSections,
}) {
    const removeDefaultValue = e => {
        e.target.value = ""
    }
    //for some reason this handleinput change does not update...
    const handleInputChange = e => {
        console.log(e.target.value)
    }

    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="position"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />

            <input
                type="text"
                id="company"
                defaultValue="Company"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="from"
                defaultValue="from"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="to"
                defaultValue="To"
                onClick={removeDefaultValue}
            />
        </div>
    )
}
