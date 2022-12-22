import { useState } from "react"
import uniquid from "uniquid"

export default function Experience({
    components,
    setComponents,
    targetKey,
    handleInputChange,
}) {
    const removeDefaultValue = e => {
        e.target.value = ""
    }

    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="position"
                // defaultValue="Position"
                defaultValue={"Position"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="company"
                defaultValue="Company"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="from"
                defaultValue="from"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="to"
                defaultValue="To"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
        </div>
    )
}
