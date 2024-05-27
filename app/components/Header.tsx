import React from 'react';
import {Link} from "@remix-run/react";

function Header() {

    const iconList = [
        {
            id: 0,
            src: './icons/light_mode_icon.svg',
            alt: 'dark mode toggle',
            href: null
        },
        {
            id: 1,
            src: './icons/adhd_icon.png',
            alt: 'adhd mode toggle',
            href: null
        },
        {
            id: 2,
            src: './icons/github_icon.svg',
            alt: 'github link',
            href: 'https://github.com/ccentrella'
        }
    ];
    const icons = iconList.map(icon => {
        const image = <img src={icon.src} alt={icon.alt} className={'w-7 rounded p-[0.32rem] bg-[#113D4D] hover:bg-cyan-800 transition-colors'}/>;

        return icon.href ? (
            <a key={icon.id} href={icon.href} rel={'noopener'} target={'_blank'}>
                {image}
            </a>
        ) : image;
    });

    return (
        <div className={'px-7 py-4 bg-[#023142] flex flex-wrap justify-between items-center'}>
            <div className={'flex items-center gap-3'}>
                <a href="/"><img src={'./favicon.png'} alt={'profile picture logo'} className={'w-10'}/></a>
                <p className={'text-cyan-100 md:hidden'}>Experience</p>
            </div>
            <div className={'flex gap-1.5 img md:order-last'}>
                {icons}
            </div>
            <label htmlFor={'navbar-toggle'} className={'md:hidden'}>
                <img src={'./icons/menu.svg'} alt={'menu button'} className={'w-8 cursor-pointer'}/>
            </label>
            <input id={'navbar-toggle'} className={'navbar-toggle'} type={'checkbox'}/>
            <div className={'navbar'}>
                <p><Link to="/">Experience</Link></p>
                <p><Link to="/interests">Interests</Link></p>
                <p><Link to="/blog">Blog</Link></p>
                <p><Link to="/contact">Contact</Link></p>
            </div>
        </div>
    );
}

export default Header;