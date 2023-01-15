import PName from "./PName"
import PExperience from "./pExperience"

export default function CVPreview({ values, expValues }) {
    return (
        <section className="cvpreview-container">
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
            <p>{expValues.position}</p>
            {expValues.map(item => {
                return (
                    <>
                        <PExperience
                            posiiton={item.posiiton}
                            company={item.company}
                            from={item.from}
                            to={item.to}
                        />
                    </>
                )
            })}
        </section>
    )
}
