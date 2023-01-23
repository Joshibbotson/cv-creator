import uniquid from "uniquid"
import { memo, useRef } from "react"

export const Experience = memo(function Experience({
    compKey,
    handleInputChange,
    position,
    expSections,
    setExpSections,
}) {
    //Store default values to prevent resetting default input values when adding new Experience component to the DOM
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
            {/* re-render Experience sections to filter out this section. */}
            {/* need to call handleInputChange to updated values when deleted as currently they're only updated once input changes in an experience section */}
            <button
                id="deleteExperienceBtn"
                className="deleteBtn"
                onClick={e => {
                    setExpSections(
                        expSections.filter(item => {
                            return item.key !== compKey
                        }),
                        handleInputChange(e, compKey)
                    )
                }}
            >
                Delete
            </button>
        </div>
    )
})
