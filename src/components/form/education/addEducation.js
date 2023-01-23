import uniquid from "uniquid"

export default function AddEducation({
    educationSections,
    setEducationSections,
}) {
    return (
        <button
            onClick={() => {
                educationSections.length > 0
                    ? setEducationSections([
                          ...educationSections,
                          {
                              universityCollege: "",
                              qualifcation: "",
                              from: "",
                              to: "",
                              key: uniquid(),
                          },
                      ])
                    : setEducationSections([
                          {
                              universityCollege: "",
                              qualifcation: "",
                              from: "",
                              to: "",
                              key: uniquid(),
                          },
                      ])
            }}
        >
            Add
        </button>
    )
}
