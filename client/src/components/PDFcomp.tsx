"use client"

export default function PDFcomp({
    url
}: {
    url: string
}) {
    const pdfIframeContainerStyle = {
        overflow: 'hidden',
        padding: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#eee',
    };

    const pdfIframeStyle = {
        width: '100%',
    };

    return (
        <div className="mx-5">
            <div style={pdfIframeContainerStyle} className="md:max-w-4xl mx-auto">
                <iframe
                    src={url}
                    className="pdf-iframe h-[600px]"
                    style={pdfIframeStyle}
                    title="PDF Document"
                />
            </div>
        </div>
    )
}