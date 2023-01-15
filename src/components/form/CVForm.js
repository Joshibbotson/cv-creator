import Pinfo from "./Pinfo"
import AddExperience from "./experience/addExperience"
import { Experience } from "./experience/Experience"

export default function CVForm({
    values,
    setValues,
    expValues,
    setExpValues,
    expSections,
    setExpSections,
    updateExpValues,
    handleInputChange,
}) {
    return (
        <section className="cvform-container">
            <Pinfo values={values} setValues={setValues} />
            <h2 className="sub-title">Experience</h2>
            {expSections.map(compData => {
                return (
                    <>
                        <Experience
                            compKey={compData.key}
                            handleInputChange={handleInputChange}
                        />
                    </>
                )
            })}
            <AddExperience
                expSections={expSections}
                setExpSections={setExpSections}
            />

            <h2 className="sub-title">Education</h2>
        </section>
    )
}
