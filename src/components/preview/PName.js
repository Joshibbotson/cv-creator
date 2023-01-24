export default function PName({
    title,
    fullName,
    address,
    phoneNumber,
    email,
    summary,
}) {
    return (
        <>
            <div className="name-preview">
                <h2>{`${title} ${fullName}`}</h2>
                <p>{summary}</p>
            </div>
            <div className="contact-details-preview"></div>
            <h4>{email}</h4>
            <h5>{address}</h5>
            <h5>{phoneNumber}</h5>
            <div className="summary-preview"></div>
        </>
    )
}
