import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"
import Experience from "./form/Experience"
import Education from "./form/Education"

export default function Main() {
    const [components, setComponents] = useState([
        {
            comp: <Experience />,
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
    const handleInputChange = e => {
        console.log(e.target.id)
        switch (e.target.id) {
            case "position":
                setValues({
                    ...values,
                    position: e.target.value,
                })
                break
        }
        console.log(values)
    }

    return (
        <main>
            <CVForm
                values={values}
                setValues={setValues}
                components={components}
                setComponents={setComponents}
                handleInputChange={handleInputChange}
            />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
