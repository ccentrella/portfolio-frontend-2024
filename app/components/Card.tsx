import React from 'react';

function Card({tag, tagBackground='bg-cyan-700', socials=null, children}) {
    return (
        <div className={'w-[100%] lg:w-96 lg:basis-5/12 p-7 bg-primaryDark rounded-2xl'}>
            <span className={`px-5 py-2 rounded-[50px] text-sm ${tagBackground} text-cyan-100`}>{tag}</span>
            <div className={'my-7 text-cyan-10'}>
                {children}
                {socials && <div>{socials}</div>}
            </div>
        </div>
    );
}

export default Card;