import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"
import Experience from "./form/Experience"
import Education from "./form/Education"

export default function Main() {
    const [components, setComponents] = useState(() => [
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

    // const [experienceValues, setExperienceValues] = useState({
    //     currentValue: {
    //         position: "asdsa",
    //         company: "asdas",
    //         from: "asd",
    //         to: "wewe",
    //         key: uniquid(),
    //     },
    //     valueArr: [
    //         {
    //             position: "asdsa",
    //             company: "asdas",
    //             from: "asd",
    //             to: "wewe",
    //             key: uniquid(),
    //         },
    //     ],
    // })

    return (
        <main>
            <CVForm
                values={values}
                setValues={setValues}
                components={components}
                setComponents={setComponents}
            />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
