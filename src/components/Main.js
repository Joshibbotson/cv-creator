import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"
import Experience from "./form/Experience"
import Education from "./form/Education"

export default function Main() {
    const [expValues, setExpValues] = useState({
        position: "",
    })
    const [components, setComponents] = useState([
        {
            comp: (
                <Experience expValues={expValues} setExpValues={setExpValues} />
            ),
            key: uniquid(),
            position: "web dev",
        },
        { comp: <Education />, key: uniquid(), position: "baseball player" },
    ])

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
                expValues={expValues}
                setExpValues={setExpValues}
                components={components}
                setComponents={setComponents}
            />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
