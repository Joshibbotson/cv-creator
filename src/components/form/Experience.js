import uniquid from "uniquid"

export default function Experience(props) {
    console.log(props.components)

    const removeDefaultValue = e => {
        e.target.value = ""
    }

    const handleInputChange = e => {
        console.log(e.target.id)
        // switch (e.target.id) {
        //     case "position":
        props.setComponents([
            {
                ...props.components,
                position: e.target.value,
            },
        ])
        // setExperienceValues(
        //     expArr.filter(item => {
        //             if (item.key === targetComp.key) {
        //                 return item
        //             }
        //         })
        //     )
        // }},
        //     break
        // case "company":
        //     setExperienceValues({
        //         ...currentExpValue,
        //         company: e.target.value,
        //     })
        //     break
        // case "from":
        //     setExperienceValues({
        //         ...currentExpValue,
        //         from: e.target.value,
        //     })
        //     break
        // case "to":
        //     console.log("MOBILKE")
        //     setExperienceValues({
        //         ...currentExpValue,
        //         to: e.target.value,
        //     })
        //     break
        // }
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
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="from"
                defaultValue="from"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="to"
                defaultValue="To"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
        </div>
    )
}
