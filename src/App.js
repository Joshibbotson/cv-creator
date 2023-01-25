import Nav from "./components/Nav"
import Main from "./components/Main"
import React, { Fragment, useRef } from "react"
import Footer from "./components/Footer"
import { useReactToPrint } from "react-to-print"

function App() {
    const cvPreviewRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => cvPreviewRef.current,
    })
    return (
        <>
            <Nav cvPreviewRef={cvPreviewRef} handlePrint={handlePrint} />
            <Main cvPreviewRef={cvPreviewRef} />
            <Footer />
        </>
    )
}

export default App
