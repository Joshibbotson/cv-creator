import CVForm from "./form/CVForm"
import { CVPreview } from "./preview/CVPreview"
import { React, useState, useCallback } from "react"
import uniquid from "uniquid"

// import Experience from "./form/Experience"
// import Education from "./form/Education"

export default function Main({
    cvPreviewRef,
    values,
    setValues,
    expSections,
    setExpSections,
    educationSections,
    setEducationSections,
    handleInputChange,
    expValues,
    edValues,
    defaultInfoValues,
}) {
    return (
        <main>
            <CVForm
                values={values}
                setValues={setValues}
                expSections={expSections}
                setExpSections={setExpSections}
                educationSections={educationSections}
                setEducationSections={setEducationSections}
                handleInputChange={handleInputChange}
                defaultInfoValues={defaultInfoValues}
            />
            <CVPreview
                ref={cvPreviewRef}
                values={values}
                setValues={setValues}
                expValues={expValues}
                edValues={edValues}
            />
        </main>
    )
}
