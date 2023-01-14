import Pinfo from "./Pinfo"
import Experience from "./Experience"
import AddExperience from "./addExperience"

import uniquid from "uniquid"
import Education from "./Education"

export default function CVForm({
    values,
    setValues,
    expValues,
    setExpValues,
    expSections,
    setExpSections,
}) {
    // const AddEducation = () => {
    //     return (
    //         <button
    //             onClick={() => {
    //                 setExpSections([
    //                     ...expSections,
    //                     {
    //                         comp: <Education />,
    //                         key: uniquid(),
    //                     },
    //                 ])
    //             }}
    //         >
    //             Add
    //         </button>
    //     )
    // }

    // const HandleDelete = ({ targetComp }) => {
    //     return (
    //         <button
    //             className="deleteBtn"
    //             onClick={() => {
    //                 setExpSections(
    //                     expSections.filter(item => {
    //                         return item.key !== targetComp.key
    //                     })
    //                 )
    //             }}
    //         >
    //             Delete
    //         </button>
    //     )
    // }

    return (
        <section className="cvform-container">
            <Pinfo values={values} setValues={setValues} />
            <h2 className="sub-title">Experience</h2>
            {/* <Experience expValues={expValues} setExpValues={setExpValues} /> */}
            {expSections.map(compData => {
                return (
                    <>
                        <Experience
                            key={compData.key}
                            company={compData.company}
                            from={compData.from}
                            to={compData.to}
                            expSections={expSections}
                            setExpSections={setExpSections}
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
