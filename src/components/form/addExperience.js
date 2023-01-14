import uniquid from "uniquid"

export default function AddExperience({ expSections, setExpSections }) {
    return (
        <button
            onClick={() => {
                expSections.length > 0
                    ? setExpSections([
                          ...expSections,
                          {
                              position: "",
                              company: "",
                              from: "",
                              to: "",
                              key: uniquid(),
                          },
                      ])
                    : setExpSections([
                          {
                              position: "",
                              company: "",
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

//ideally store the information with uniqueIDs
//then map each one to be rendered!
