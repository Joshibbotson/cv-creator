import { useRef } from "react"
export default function Pinfo({ values, setValues, defaultInfoValues }) {
    const resetInputCheck = useRef([])

    const removeDefaultValue = e => {
        if (!resetInputCheck.current.includes(e.target.id)) {
            e.target.value = ""
            resetInputCheck.current = [...resetInputCheck.current, e.target.id]
        }
    }

    const handleInputChange = e => {
        switch (e.target.id) {
            case "title":
                setValues({ ...values, title: e.target.value })
                break
            case "fullName":
                setValues({ ...values, fullName: e.target.value })
                break
            case "address":
                setValues({ ...values, address: e.target.value })
                break
            case "phoneNumber":
                setValues({ ...values, phoneNumber: e.target.value })
                break
            case "email":
                setValues({ ...values, email: e.target.value })
                break
            default:
                setValues({ ...values, summary: e.target.value })
                break
        }
    }

    return (
        <div className="section-container">
            <h2 className="pinfo-title">Personal Information</h2>
            <input
                type="text"
                id="title"
                defaultValue={defaultInfoValues.current.title}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />

            <input
                type="text"
                id="fullName"
                defaultValue={defaultInfoValues.current.fullName}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="address"
                defaultValue={defaultInfoValues.current.address}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="phoneNumber"
                defaultValue={defaultInfoValues.current.phoneNumber}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="email"
                defaultValue={defaultInfoValues.current.email}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <textarea
                type="textArea"
                id="summary"
                defaultValue={defaultInfoValues.current.summary}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
        </div>
    )
}
