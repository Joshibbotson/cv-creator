import PName from "./PName"
import PExperience from "./pExperience"
import PEducation from "./pEducation"
import { forwardRef } from "react"

export const CVPreview = forwardRef(
    ({ pInfoValues, expValues, edValues }, cvPreviewRef) => {
        return (
            <section className="cvpreview-container" ref={cvPreviewRef}>
                <div className="cvpreview-title">
                    <PName
                        fullName={pInfoValues.fullName}
                        address={pInfoValues.address}
                        phoneNumber={pInfoValues.phoneNumber}
                        email={pInfoValues.email}
                        summary={pInfoValues.summary}
                    />
                </div>
                <div className="cvpreview-main">
                    <h1>Experience</h1>
                    <hr></hr>

                    {expValues.map(item => {
                        return (
                            <PExperience
                                key={item.key}
                                position={item.position}
                                company={item.company}
                                from={item.from}
                                to={item.to}
                            />
                        )
                    })}
                    <h1>Education</h1>
                    <hr></hr>

                    {edValues.map(item => {
                        return (
                            <PEducation
                                key={item.key}
                                universityCollege={item.universityCollege}
                                qualification={item.qualification}
                                from={item.from}
                                to={item.to}
                            />
                        )
                    })}
                </div>
            </section>
        )
    }
)
