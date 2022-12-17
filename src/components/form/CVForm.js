import Pinfo from "./Pinfo"
import Experience from "./Experience"
import { useState } from "react"
import uniquid from "uniquid"

export default function CVForm() {
    const [components, setComponents] = useState(() => [
        { comp: <Experience />, key: uniquid() },
    ])

    const AddButton = () => {
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

    const HandleDelete = ({ targetComp }) => {
        console.log(targetComp)
        return (
            <button
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
            <Pinfo />

            <h2 className="experience-title">Experience</h2>
            {/* <Experience /> */}

            {components.map(item => (
                <div key={item.key} className="section-container">
                    {item.comp}
                    <HandleDelete targetComp={item} />
                </div>
            ))}

            <AddButton />
        </section>
    )
}
