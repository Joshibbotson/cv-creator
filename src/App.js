import Nav from "./components/Nav"
import Main from "./components/Main"
import { React, useRef, useState, useCallback, useEffect } from "react"
import Footer from "./components/Footer"
import { useReactToPrint } from "react-to-print"

import uniquid from "uniquid"

function App() {
    const defaultInfoValues = useRef({
        title: "Title",
        fullName: "Full Name",
        address: "Addres",
        phoneNumber: "Phone Number",
        email: "Email",
        summary: "Summary",
    })

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

    const resetValues = (useEffect = () => {
        setValues({
            title: "",
            fullName: "",
            address: "",
            phoneNumber: "",
            email: "",
            summary: "",
        })

        setExpValues([])
        setExpSections([{ key: uniquid() }])
        setEdValues([])
        setEducationSections([{ key: uniquid() }])
    })

    const cvPreviewRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => cvPreviewRef.current,
    })
    return (
        <>
            <Nav
                cvPreviewRef={cvPreviewRef}
                handlePrint={handlePrint}
                resetValues={resetValues}
            />
            <Main
                cvPreviewRef={cvPreviewRef}
                values={values}
                setValues={setValues}
                expSections={expSections}
                setExpSections={setExpSections}
                educationSections={educationSections}
                setEducationSections={setEducationSections}
                handleInputChange={handleInputChange}
                expValues={expValues}
                edValues={edValues}
                defaultInfoValues={defaultInfoValues}
            />
            <Footer />
        </>
    )
}

export default App
