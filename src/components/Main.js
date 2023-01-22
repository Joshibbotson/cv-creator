import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState, useCallback } from "react"
import uniquid from "uniquid"

// import Experience from "./form/Experience"
// import Education from "./form/Education"

export default function Main() {
    const [expSections, setExpSections] = useState([
        {
            key: uniquid(),
        },
    ])

    const [expValues, setExpValues] = useState([])

    const handleInputChange = useCallback(
        (newValue, key) => {
            const updatedExpSections = [...expSections]
            switch (newValue.target.id) {
                case "position":
                    updatedExpSections.forEach(exp => {
                        if (exp.key === key) {
                            exp.position = newValue.target.value
                        }
                    })
                    break
                case "company":
                    updatedExpSections.forEach(exp => {
                        if (exp.key === key) {
                            exp.company = newValue.target.value
                        }
                    })
                    break
                case "from":
                    updatedExpSections.forEach(exp => {
                        if (exp.key === key) {
                            exp.from = newValue.target.value
                        }
                    })
                    break
                default:
                    updatedExpSections.forEach(exp => {
                        if (exp.key === key) {
                            exp.to = newValue.target.value
                        }
                    })
            }
            setExpValues(updatedExpSections)
        },
        [expSections]
    )

    const [values, setValues] = useState({
        title: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        summary: "",
    })

    return (
        <main>
            <CVForm
                values={values}
                setValues={setValues}
                expSections={expSections}
                setExpSections={setExpSections}
                handleInputChange={handleInputChange}
            />
            <CVPreview
                values={values}
                setValues={setValues}
                expValues={expValues}
            />
        </main>
    )
}
