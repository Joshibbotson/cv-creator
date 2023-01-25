import PName from "./PName"
import PExperience from "./pExperience"
import PEducation from "./pEducation"
import { forwardRef } from "react"

export const CVPreview = forwardRef(
    ({ values, expValues, edValues }, cvPreviewRef) => {
        return (
            <section className="cvpreview-container" ref={cvPreviewRef}>
                <div className="cvpreview-title">
                    <PName
                        title={values.title}
                        fullName={values.fullName}
                        address={values.address}
                        phoneNumber={values.phoneNumber}
                        email={values.email}
                        summary={values.summary}
                    />
                </div>
                {/* <div className="cvpreview-main">
                <Pdetails />
            </div> */}

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
            </section>
        )
    }
)
