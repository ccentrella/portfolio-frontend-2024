import React from 'react';

const Capsule = ({children}) => {
    return (
        <div className={'p-5 rounded-3xl bg-cyan-950'}>
            {children}
        </div>
    );
};

export default Capsule;