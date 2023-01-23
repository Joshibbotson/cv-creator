import uniquid from "uniquid"
import { memo, useRef } from "react"

export const Education = memo(function Education({
    compKey,
    handleInputChange,
    educationSections,
    setEducationSections,
}) {
    //Store default values to prevent resetting default input values when adding new Experience component to the DOM
    const defaultValues = useRef({
        defaultUniversityCollege: "University / College",
        defaultQualification: "Qualification",
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
                id="universityCollege"
                defaultValue={defaultValues.current.defaultUniversityCollege}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultUniversityCollege =
                            e.target.value)
                    )
                }}
            />

            <input
                type="text"
                id="qualification"
                defaultValue={defaultValues.current.defaultQualification}
                onClick={removeDefaultValue}
                onChange={e => {
                    return (
                        handleInputChange(e, compKey),
                        (defaultValues.current.defaultQualification =
                            e.target.value)
                    )
                }}
            />
            <input
                type="text"
                id="edFrom"
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
                id="edTo"
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
            {/* Call handleInputChange to update values when deleted*/}
            <button
                id="deleteEducationBtn"
                className="deleteBtn"
                onClick={e => {
                    setEducationSections(
                        educationSections.filter(item => {
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
