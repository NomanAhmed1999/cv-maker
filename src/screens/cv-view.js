import React, { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom'
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Button } from "react-bootstrap";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";


const CvView = () => {
    const [cvInfo, setCvInfo] = useState({});
    const location = useLocation();
    const ddData = [
        { text: "A4", value: "size-a4" },
        { text: "Letter", value: "size-letter" },
        { text: "Executive", value: "size-executive" }
    ];
    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
    });

    useEffect(() => {
        const cvInfoProps = location.state.cvInfo;
        console.log("props", cvInfoProps);
        setCvInfo(cvInfoProps);
    });

    const updatePageLayout = event => {
        setLayoutSelection(event.target.value);
    };


    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };

    return (
        <div className="view-container" id="example">
            <div className="box wide hidden-on-narrow m-2">
                <div className="box-col">
                    <h4>Select a Page Size</h4>
                    <DropDownList
                        data={ddData}
                        textField="text"
                        dataItemKey="value"
                        value={layoutSelection}
                        onChange={updatePageLayout}
                    />
                </div>
                <div className="box-col">
                    <h4>Export PDF</h4>
                    <Button primary={true} onClick={handleExportWithComponent}>
                        Download
                    </Button>
                </div>
            </div>
            <div className="page-container hidden-on-narrow m-3">
                <PDFExport ref={pdfExportComponent}>
                    <div className={`pdf-page ${layoutSelection.value}`}>
                    </div>
                </PDFExport>
            </div>
        </div>

    )
}
export default CvView;