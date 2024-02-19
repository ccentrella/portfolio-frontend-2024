import React from 'react';

const Capsule = ({children}) => {
    return (
        <div className={'my-5 text-center'}>
            <div className={'py-5 px-10 inline rounded-[40px] bg-primary text-cyan-100'}>
                {children}
            </div>
        </div>
    );
};

export default Capsule;