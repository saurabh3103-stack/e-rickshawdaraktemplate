import React, { useState } from "react";
import axios from "axios";

const QRCodeGeneration = () => {
    const [uniqueId, setUniqueId] = useState("");
    const [qrUrl, setQrUrl] = useState("");

    const generateQRCode = async () => {
        try {
            const response = await axios.post("http://localhost:3002/api/qr_code/generate_qr", { uniqueId });
            setQrUrl(response.data.qrUrl);
        } catch (error) {
            console.error("Error generating QR code:", error);
        }
    };

    const downloadQRCode = () => {
        const link = document.createElement('a');
        link.href = qrUrl;
        link.download = `${uniqueId}.jpg`;  // Set download file extension to JPG
        link.click();  // Programmatically click the link to trigger the download
    };

    return (
        <div className="content-wrapper">
            <div className="content">
                <div className="container-fluid">
                    <h2>QR Code Generator</h2>
                    <input
                        type="text"
                        placeholder="Enter Unique ID"
                        value={uniqueId}
                        onChange={(e) => setUniqueId(e.target.value)}
                    />
                    <button onClick={generateQRCode}>Generate QR Code</button>

                    {qrUrl && (
                        <div>
                            <h3>Generated QR Code:</h3>
                            {/* Set width and height for the QR code to 600x600px */}
                            <img src={qrUrl} alt="QR Code" className="img-fluid w-25" />
                            <br />
                            {/* Download button that triggers the download function */}
                            <button onClick={downloadQRCode}>Download QR Code</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QRCodeGeneration;
