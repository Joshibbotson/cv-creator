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
            <h2>{`${title} ${fullName}`}</h2>
            <h4>{email}</h4>
            <h5>{address}</h5>
            <h5>{phoneNumber}</h5>
            <p>{summary}</p>
        </>
    )
}
