import React from 'react';

const CanvaEmbed = () => {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        paddingBottom: '0',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em',
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform'
    };

    const iframeStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        border: 'none',
        padding: '0',
        margin: '0'
    };

    return (
        <div style={containerStyle}>
            <iframe 
                style={iframeStyle}
                src="https://www.canva.com/design/DAFwBoEGLSs/view?embed" 
                allowFullScreen="allowFullScreen" 
                allow="fullscreen">
            </iframe>
            <a 
                href="https://www.canva.com/design/DAFwBoEGLSs/view?utm_content=DAFwBoEGLSs&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" 
                target="_blank" 
                rel="noopener">
                Proposal Kemitraan Sundaybest (Eng) by sabrina cornelia
            </a>
        </div>
    );
}

export default CanvaEmbed;