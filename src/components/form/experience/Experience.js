import uniquid from "uniquid"
import { memo } from "react"

export const Experience = memo(function Experience({
    compKey,
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
                onClick={removeDefaultValue}
                onChange={e => handleInputChange(e, compKey)}
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
})
