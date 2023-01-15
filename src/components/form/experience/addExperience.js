import uniquid from "uniquid"

export default function AddExperience({ expSections, setExpSections }) {
    return (
        <button
            onClick={() => {
                expSections.length > 0
                    ? setExpSections([
                          ...expSections,
                          {
                              key: uniquid(),
                          },
                      ])
                    : setExpSections([
                          {
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
