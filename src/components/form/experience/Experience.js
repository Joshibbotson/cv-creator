import uniquid from "uniquid"
import { memo, useRef } from "react"

export const Experience = memo(function Experience({
    compKey,
    handleInputChange,
    position,
}) {
    const defaultValues = useRef({
        defaultPosition: "Position",
        defaultCompany: "Company",
        defaultFrom: "From",
        defaultTo: "To",
    })

    const removeDefaultValue = e => {
        e.target.value = ""
    }
    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="position"
                defaultValue={defaultValues.current.defaultPosition}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultPosition = e.target.value)
                    )
                }}
            />

            <input
                type="text"
                id="company"
                defaultValue={defaultValues.current.defaultCompany}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultCompany = e.target.value)
                    )
                }}
            />
            <input
                type="text"
                id="from"
                defaultValue={defaultValues.current.defaultFrom}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultFrom = e.target.value)
                    )
                }}
            />
            <input
                type="text"
                id="to"
                defaultValue={defaultValues.current.defaultTo}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultTo = e.target.value)
                    )
                }}
            />
        </div>
    )
})
