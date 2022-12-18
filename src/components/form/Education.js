import uniquid from "uniquid"

export default function Education() {
    const removeDefaultValue = e => {
        e.target.value = ""
    }

    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="university"
                defaultValue="University"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="degree"
                defaultValue="Degree"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="subject"
                defaultValue="Subject"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="educationFrom"
                defaultValue="From"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="educationTo"
                defaultValue="To"
                onClick={removeDefaultValue}
            />
        </div>
    )
}
