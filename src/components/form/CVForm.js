import Pinfo from "./Pinfo"
import Experience from "./Experience"
import { useState } from "react"
import uniquid from "uniquid"
import Education from "./Education"

export default function CVForm({
    values,
    setValues,
    components,
    setComponents,
    handleInputChange,
}) {
    const AddExperience = () => {
        return (
            <button
                onClick={() => {
                    console.log(setComponents)
                    setComponents([
                        ...components,
                        {
                            comp: <Experience />,
                            key: uniquid(),
                            position: "",
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
            {/* takes components state, filters to create array of Experience components, then renders that array to the DOM with a delete button */}
            {components
                .filter(item => {
                    if (item.comp.type.name !== "Education") {
                        item.comp = (
                            <Experience
                                components={components}
                                setComponents={setComponents}
                                targetKey={item.key}
                                handleInputChange={handleInputChange}
                            />
                        )
                        return item
                    }
                })
                .map(item => (
                    <div key={item.key} className="section-container">
                        {item.comp}
                        <HandleDelete targetComp={item} />
                    </div>
                ))}

            <AddExperience
                components={components}
                setComponents={setComponents}
            />

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
