import React from 'react';

function HighlightSection({color='bg-cyan-500', children}) {
    return (
        <div className={`px-5 md:px-10 py-40 ${color}`}>
            <div className={'container'}>{children}</div>
        </div>
    );
}

export default HighlightSection;