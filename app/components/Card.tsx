import React from 'react';

function Card({title, subtitle, image, children}: {
    title?: string,
    subtitle?: string,
    image?: string,
    children: any
}) {
    const titleColor = subtitle ? 'text-cyan-100' : 'text-cyan-300';
    return (
        <div className={'p-7 max-w-96 rounded-2xl bg-cyan-900 shadow-xl shadow-cyan-100 hover:bg-cyan-800 hover:shadow-2xl hover:shadow-cyan-300'}>
            <div className={'flex'}>
                {image && <img src={image} alt={'card image'} className={'w-12 h-12 mr-5'}/>}
                <div>
                    {title && <p className={`text-xl ${titleColor} font-extrabold`}>{title}</p>}
                    {subtitle && <p className={'text-lg text-cyan-300 font-extrabold'}>{subtitle}</p>}
                </div>
            </div>
            <div className={'text-blue-100 pt-2'}>
                {children}
            </div>
        </div>
    );
}

export default Card;