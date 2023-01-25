export default function PEducation({
    universityCollege,
    qualification,
    from,
    to,
}) {
    return (
        <div className="education-preview">
            <h2>{universityCollege}</h2>
            <h4>{qualification}</h4>
            <h5>
                {from} - {to}
            </h5>
        </div>
    )
}
