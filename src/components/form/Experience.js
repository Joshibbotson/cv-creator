import uniquid from "uniquid"

export default function Experience() {
    const removeDefaultValue = e => {
        e.target.value = ""
    }

    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="position"
                defaultValue="Position"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="company"
                defaultValue="Company"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="from"
                defaultValue="from"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="to"
                defaultValue="To"
                onClick={removeDefaultValue}
            />
        </div>
    )
}
