import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"

export default function Main() {
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
            <CVForm values={values} setValues={setValues} />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
