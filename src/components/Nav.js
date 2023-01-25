export default function Nav({ cvPreviewRef, handlePrint }) {
    return (
        <nav>
            <h1>CV CREATOR</h1>
            <div className="nav-btns">
                <button className="save-pdf-btn" onClick={handlePrint}></button>
            </div>
        </nav>
    )
}
