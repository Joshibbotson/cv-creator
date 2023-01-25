export default function PExperience({ position, company, from, to }) {
    return (
        <div className="experience-preview">
            <h2>{position}</h2>
            <h4>{company}</h4>
            <h5>
                {from} - {to}
            </h5>
        </div>
    )
}
