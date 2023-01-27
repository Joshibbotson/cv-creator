export default function Nav({ handlePrint, loadExampleCv, resetValues }) {
    return (
        <nav>
            <h1>CV CREATOR</h1>
            <div className="nav-btns">
                <button className="reset-btn" onClick={resetValues}></button>
                <button
                    className="load-example"
                    onClick={loadExampleCv}
                ></button>
                <button className="save-pdf-btn" onClick={handlePrint}></button>
            </div>
        </nav>
    )
}
