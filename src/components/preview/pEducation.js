export default function PEducation({
    universityCollege,
    qualification,
    from,
    to,
}) {
    return (
        <>
            <h2>{universityCollege}</h2>
            <h4>{qualification}</h4>
            <h5>{from}</h5>
            <h5>{to}</h5>
        </>
    )
}
