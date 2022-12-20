import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"

export default function Main() {
    const [values, setValues] = useState({
        title: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        summary: "",
    })

    const [experienceValues, setExperienceValues] = useState({
        currentValue: {
            position: "",
            company: "",
            from: "",
            to: "",
            key: uniquid(),
        },
        valueArr: [],
    })

    return (
        <main>
            <CVForm
                values={values}
                setValues={setValues}
                currentExpValue={experienceValues.currentValue}
                expArr={experienceValues.valueArr}
                setExperienceValues={setExperienceValues}
            />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
