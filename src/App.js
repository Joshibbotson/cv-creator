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
        address: "Address",
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

    const resetValues = () => {
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
    }
    //Import in as a module?
    const loadExampleCv = () => {
        defaultInfoValues.current = {
            title: "sdf",
            fullName: "sdf sdfd",
            address: "Address",
            phoneNumber: "Phone Number",
            email: "Email",
            summary: "Summary",
        }

        setValues({
            title: "Miss",
            fullName: "Saki Watanabe",
            address: "Sengoku Japan",
            phoneNumber: "07432026523",
            email: "kyokoWatanabe@gmail.com",
            summary:
                "Junior Web Developer, specialised in React, Typescript and intuitive UI experiences.",
        })

        setExpValues([
            {
                position: "Senior React Developer",
                company: "Google",
                from: "2016",
                to: "Present",
                key: uniquid(),
            },
            {
                position: "React Developer",
                company: "Honda",
                from: "2013",
                to: "2016",
                key: uniquid(),
            },
            {
                position: "Junior Web Developer",
                company: "Toyota",
                from: "2010",
                to: "2013",
                key: uniquid(),
            },
        ])
        setExpSections([
            {
                position: "Senior React Developer",
                company: "Google",
                from: "2016",
                to: "Present",
                key: uniquid(),
            },
            {
                position: "React Developer",
                company: "Honda",
                from: "2013",
                to: "2016",
                key: uniquid(),
            },
            {
                position: "Junior Web Developer",
                company: "Toyota",
                from: "2010",
                to: "2013",
                key: uniquid(),
            },
        ])

        setEdValues([
            {
                universityCollege: "University of Leeds",
                qualifcation: "MSc Computer Science ",
                from: "2008",
                to: "2010",
                key: uniquid(),
            },
            {
                universityCollege: "University of Lincoln",
                qualifcation: "BSc Computer Science",
                from: "2005",
                to: "2008",
                key: uniquid(),
            },
            {
                universityCollege: "Grimsby Institute",
                qualifcation: "Level 3 diploma IT",
                from: "2003",
                to: "2005",
                key: uniquid(),
            },
        ])
        setEducationSections([
            {
                universityCollege: "University of Leeds",
                qualifcation: "MSc Computer Science ",
                from: "2008",
                to: "2010",
                key: uniquid(),
            },
            {
                universityCollege: "University of Lincoln",
                qualifcation: "BSc Computer Science",
                from: "2005",
                to: "2008",
                key: uniquid(),
            },
            {
                universityCollege: "Grimsby Institute",
                qualifcation: "Level 3 diploma IT",
                from: "2003",
                to: "2005",
                key: uniquid(),
            },
        ])
    }

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
                loadExampleCv={loadExampleCv}
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
