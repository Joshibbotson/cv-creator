export default function Pinfo() {
    const removeDefaultValue = e => {
        e.target.value = ""
    }

    return (
        <div className="section-container">
            <h2 className="pinfo-title">Personal Information</h2>
            <input
                type="text"
                id="title"
                defaultValue="Title"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="firstName"
                defaultValue="First Name"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="address"
                defaultValue="Address"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="phoneNumber"
                defaultValue="Phone number"
                onClick={removeDefaultValue}
            />
            <input
                type="text"
                id="email"
                defaultValue="Email"
                onClick={removeDefaultValue}
            />
            <textarea
                type="textArea"
                id="summary"
                defaultValue="summary"
                onClick={removeDefaultValue}
            />
        </div>
    )
}
