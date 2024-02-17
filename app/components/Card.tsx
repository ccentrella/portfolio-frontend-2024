import React from 'react';

function Card({title, children}: {title?: string, children: any}) {
    return (
        <div className={'p-7 max-w-96 rounded-2xl bg-cyan-900 shadow-xl shadow-cyan-100 hover:bg-cyan-800 hover:shadow-2xl hover:shadow-cyan-300'}>
            <p className={'text-xl text-cyan-300 font-extrabold pb-1'}>{title}</p>
            <p className={'text-blue-100'}>
                {children}
            </p>
        </div>
    );
}

export default Card;