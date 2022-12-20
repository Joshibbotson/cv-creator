import Pinfo from "./Pinfo"
import Experience from "./Experience"
import { useState } from "react"
import uniquid from "uniquid"
import Education from "./Education"

export default function CVForm({ values, setValues }) {
    const [components, setComponents] = useState(() => [
        { comp: <Experience />, key: uniquid() },
        { comp: <Education />, key: uniquid() },
    ])

    const AddExperience = () => {
        return (
            <button
                onClick={() => {
                    setComponents([
                        ...components,
                        {
                            comp: <Experience />,
                            key: uniquid(),
                        },
                    ])
                }}
            >
                Add
            </button>
        )
    }

    const AddEducation = () => {
        return (
            <button
                onClick={() => {
                    setComponents([
                        ...components,
                        {
                            comp: <Education />,
                            key: uniquid(),
                        },
                    ])
                }}
            >
                Add
            </button>
        )
    }

    const HandleDelete = ({ targetComp }) => {
        return (
            <button
                className="deleteBtn"
                onClick={() => {
                    setComponents(
                        components.filter(item => {
                            if (item.key !== targetComp.key) {
                                return item
                            }
                        })
                    )
                }}
            >
                Delete
            </button>
        )
    }

    return (
        <section className="cvform-container">
            <Pinfo values={values} setValues={setValues} />

            <h2 className="sub-title">Experience</h2>

            {components
                .filter(item => {
                    if (item.comp.type.name !== "Education") {
                        return item
                    }
                })
                .map(item => (
                    <div key={item.key} className="section-container">
                        {item.comp}
                        <HandleDelete targetComp={item} />
                    </div>
                ))}

            <AddExperience />

            <h2 className="sub-title">Education</h2>
            {components
                .filter(item => {
                    if (item.comp.type.name !== "Experience") {
                        return item
                    }
                })
                .map(item => (
                    <div key={item.key} className="section-container">
                        {item.comp}
                        <HandleDelete targetComp={item} />
                    </div>
                ))}
            <AddEducation />
        </section>
    )
}
