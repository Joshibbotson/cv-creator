import Pinfo from "./Pinfo"
import Experience from "./Experience"

import uniquid from "uniquid"
import Education from "./Education"

export default function CVForm({
    values,
    setValues,
    expValues,
    setExpValues,
    components,
    setComponents,
}) {
    const AddExperience = () => {
        return (
            <button
                onClick={() => {
                    console.log(setComponents)
                    setComponents([
                        ...components,
                        {
                            comp: (
                                <Experience
                                    expValues={expValues}
                                    setExpValues={setExpValues}
                                />
                            ),
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
                            return item.key !== targetComp.key
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
                    return item.comp.type.name !== "Education"
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
                expValues={expValues}
                setExpValues={setExpValues}
            />
            {/* takes components state, filters to create array of Education components, then renders that array to the DOM with a delete button */}

            <h2 className="sub-title">Education</h2>
            {components
                .filter(item => {
                    return item.comp.type.name !== "Experience"
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
