import { useRef } from "react"
export default function Pinfo({ values, setValues }) {
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
                defaultValue="Title"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />

            <input
                type="text"
                id="fullName"
                defaultValue="Full Name"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="address"
                defaultValue="Address"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="phoneNumber"
                defaultValue="Phone number"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="email"
                defaultValue="Email"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <textarea
                type="textArea"
                id="summary"
                defaultValue="Summary"
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
        </div>
    )
}
