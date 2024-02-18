import React from 'react';

const ColoredSection = ({width = 'w-[90%] md:w-[50%]', children}) => {
    return (
        <div className={`m-5 px-10 lg:px-16 py-40 ${width} bg-cyan-100 rounded-3xl`}>
            {children}
        </div>
    );
};

export default ColoredSection;