import Pinfo from "./Pinfo"
import AddExperience from "./experience/addExperience"
import AddEducation from "./education/addEducation"
import { Experience } from "./experience/Experience"
import { Education } from "./education/Education"

export default function CVForm({
    values,
    setValues,
    expSections,
    setExpSections,
    educationSections,
    setEducationSections,
    handleInputChange,
}) {
    return (
        <section className="cvform-container">
            <Pinfo values={values} setValues={setValues} />
            <h2 className="sub-title">Experience</h2>
            {expSections.map(compData => {
                return (
                    <Experience
                        key={compData.key}
                        compKey={compData.key}
                        handleInputChange={handleInputChange}
                        expSections={expSections}
                        setExpSections={setExpSections}
                    />
                )
            })}
            <AddExperience
                expSections={expSections}
                setExpSections={setExpSections}
            />

            <h2 className="sub-title">Education</h2>
            {educationSections.map(compData => {
                return (
                    <Education
                        key={compData.key}
                        compKey={compData.key}
                        handleInputChange={handleInputChange}
                        educationSections={educationSections}
                        setEducationSections={setEducationSections}
                    />
                )
            })}
            <AddEducation
                educationSections={educationSections}
                setEducationSections={setEducationSections}
            />
        </section>
    )
}
