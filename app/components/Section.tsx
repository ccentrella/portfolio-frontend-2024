import React from 'react';

function Section({backgroundColor, textColor, title, children}) {
    const isTransparent = backgroundColor === 'bg-transparent';
    const padding = isTransparent ? 'pb-20' : 'py-28 lg:py-32';

    return (
        <div className={`${backgroundColor} my-16`}>
            <div className={`container ${padding} space-y-5 ${textColor} text-lg max-w-[1000]`}>
                <h2 className={`text-center ${textColor} pt-0 pb-5 text-4xl font-normal`}>{title}</h2>
                {children}
            </div>
        </div>
    );
}

export default Section;