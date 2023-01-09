import uniquid from "uniquid"

export default function Experience({
    components,
    setComponents,
    targetKey,
    values,
    setValues,
    expValues,
    setExpValues,
}) {
    const removeDefaultValue = e => {
        e.target.value = ""
    }
    //for some reason this handleinputchange does not update...
    const handleInputChange = e => {
        console.log(e.target.id)

        setExpValues({
            position: e.target.value,
        })
        console.log(expValues)
    }

    return (
        <div key={uniquid()} className="section-container">
            <input
                type="text"
                id="position"
                defaultValue="Position"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
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
