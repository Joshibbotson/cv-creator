import CVForm from "./form/CVForm"
import { CVPreview } from "./preview/CVPreview"
import { React, useState, useCallback } from "react"
import uniquid from "uniquid"

// import Experience from "./form/Experience"
// import Education from "./form/Education"

export default function Main({ cvPreviewRef }) {
    const [expSections, setExpSections] = useState([
        {
            key: uniquid(),
        },
    ])
    const [educationSections, setEducationSections] = useState([
        {
            key: uniquid(),
        },
    ])

    const [expValues, setExpValues] = useState([])

    const [edValues, setEdValues] = useState([])

    const handleInputChange = useCallback(
        (newValue, key) => {
            const updatedExpSections = [...expSections]
            const updatedEducationSections = [...educationSections]
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
                case "deleteExperienceBtn":
                    updatedExpSections.forEach(exp => {
                        if (exp.key === key) {
                            exp.position = newValue.target.value
                            exp.company = newValue.target.value
                            exp.from = newValue.target.value
                            exp.to = newValue.target.value
                        }
                    })
                    break
                case "universityCollege":
                    updatedEducationSections.forEach(ed => {
                        if (ed.key === key) {
                            ed.universityCollege = newValue.target.value
                        }
                    })
                    break
                case "qualification":
                    updatedEducationSections.forEach(ed => {
                        if (ed.key === key) {
                            ed.qualification = newValue.target.value
                        }
                    })
                    break
                case "edFrom":
                    updatedEducationSections.forEach(ed => {
                        if (ed.key === key) {
                            ed.from = newValue.target.value
                        }
                    })
                    break
                case "edTo":
                    updatedEducationSections.forEach(ed => {
                        if (ed.key === key) {
                            ed.to = newValue.target.value
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
            setEdValues(updatedEducationSections)
        },
        [expSections, educationSections]
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
                educationSections={educationSections}
                setEducationSections={setEducationSections}
                handleInputChange={handleInputChange}
            />
            <CVPreview
                ref={cvPreviewRef}
                values={values}
                setValues={setValues}
                expValues={expValues}
                edValues={edValues}
            />
        </main>
    )
}
