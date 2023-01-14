import CVForm from "./form/CVForm"
import CVPreview from "./preview/CVPreview"
import { React, useState } from "react"
import uniquid from "uniquid"
import Experience from "./form/Experience"
import Education from "./form/Education"

export default function Main() {
    //expValues does change or at least it should
    // change if there aren't any bugs preventing it, but
    // the change will never get reflected in your Experience
    // component since the expValues passed to it as a prop will
    //  always be its initial value.  You should only save the data
    //  needed to create the component in state and never the
    //  component itself, else you'll run into the problem of stale
    //   state.
    const [expValues, setExpValues] = useState({
        position: "textinsertedhere",
    })

    const [expSections, setExpSections] = useState([
        {
            position: "",
            company: "",
            from: "",
            to: "",
            key: uniquid(),
        },
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
                expSections={expSections}
                setExpSections={setExpSections}
            />
            <CVPreview values={values} setValues={setValues} />
        </main>
    )
}
