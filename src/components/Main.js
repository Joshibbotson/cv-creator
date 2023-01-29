import CVForm from "./form/CVForm"
import { CVPreview } from "./preview/CVPreview"
import { React } from "react"

export default function Main({
    cvPreviewRef,
    pInfoValues,
    setPinfoValues,
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
                pInfoValues={pInfoValues}
                setPinfoValues={setPinfoValues}
                expSections={expSections}
                setExpSections={setExpSections}
                educationSections={educationSections}
                setEducationSections={setEducationSections}
                handleInputChange={handleInputChange}
                defaultInfoValues={defaultInfoValues}
            />
            <CVPreview
                ref={cvPreviewRef}
                pInfoValues={pInfoValues}
                setPinfoValues={setPinfoValues}
                expValues={expValues}
                edValues={edValues}
            />
        </main>
    )
}
