import React from 'react';

const Section = ({width = 'w-[90%] md:w-[40%]', children}) => {
    return (
        <div className={`px-5 py-10 ${width}`}>
            {children}
        </div>
    );
};

export default Section;