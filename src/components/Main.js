import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"
import { useCallback } from "react"
// import Experience from "./form/Experience"
// import Education from "./form/Education"

export default function Main() {
    const [expSections, setExpSections] = useState([
        {
            // position: "",
            // company: "",
            // from: "",
            // to: "",
            key: uniquid(),
        },
    ])

    const [expValues, setExpValues] = useState([])

    const handleInputChange = useCallback(
        (newValue, key) => {
            const updatedExpSections = [...expSections]
            updatedExpSections.forEach(exp => {
                if (exp.key === key) {
                    exp.position = newValue.target.value
                }
            })
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
