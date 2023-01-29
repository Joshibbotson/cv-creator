import Pinfo from "./personalInfo/Pinfo"
import AddExperience from "./experience/addExperience"
import AddEducation from "./education/addEducation"
import { Experience } from "./experience/Experience"
import { Education } from "./education/Education"

export default function CVForm({
    pInfoValues,
    setPinfoValues,
    expSections,
    setExpSections,
    educationSections,
    setEducationSections,
    handleInputChange,
    defaultInfoValues,
}) {
    return (
        <section className="cvform-container">
            <Pinfo
                pInfoValues={pInfoValues}
                setPinfoValues={setPinfoValues}
                defaultInfoValues={defaultInfoValues}
            />
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
