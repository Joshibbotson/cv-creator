import PName from "./PName"

export default function CVPreview({ values, setValues }) {
    return (
        <section className="cvpreview-container">
            cv preview
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
        </section>
    )
}
