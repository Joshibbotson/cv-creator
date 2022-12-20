import PName from "./PName"

export default function CVPreview({ values, setValues }) {
    return (
        <section className="cvpreview-container">
            cv preview
            <PName title={values.title} />
        </section>
    )
}
