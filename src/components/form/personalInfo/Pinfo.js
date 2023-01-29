import { useRef } from "react"
export default function Pinfo({ pInfoValues, setPinfoValues }) {
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
                setPinfoValues({ ...pInfoValues, title: e.target.value })
                break
            case "fullName":
                setPinfoValues({ ...pInfoValues, fullName: e.target.value })
                break
            case "address":
                setPinfoValues({ ...pInfoValues, address: e.target.value })
                break
            case "phoneNumber":
                setPinfoValues({ ...pInfoValues, phoneNumber: e.target.value })
                break
            case "email":
                setPinfoValues({ ...pInfoValues, email: e.target.value })
                break
            default:
                setPinfoValues({ ...pInfoValues, summary: e.target.value })
                break
        }
    }

    return (
        <div className="section-container">
            <h2 className="pinfo-title">Personal Information</h2>

            <input
                type="text"
                id="fullName"
                defaultValue={"Full Name"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="address"
                defaultValue={"Address"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="phoneNumber"
                defaultValue={"Phone Number"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <input
                type="text"
                id="email"
                defaultValue={"Email"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
            <textarea
                type="textArea"
                id="summary"
                defaultValue={"Summary"}
                onClick={removeDefaultValue}
                onChange={handleInputChange}
            />
        </div>
    )
}
