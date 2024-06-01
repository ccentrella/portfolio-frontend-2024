import React from 'react';

function Section({textColor, backgroundColor, title, children}) {
    return (
        <div className={'flex justify-center my-16'}>
            <div className={`${backgroundColor} p-7 lg:px-20 m-auto max-w-[80%] rounded-3xl`}>
                <div className={`py-16 lg:py-28 ${textColor} space-y-4`}>
                    <p className={`text-4xl text-${textColor}-100 font-medium mb-8 text-center`}>{title}</p>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Section;