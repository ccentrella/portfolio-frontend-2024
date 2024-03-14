import React from 'react';

function Header() {
    return (
        <div className={'px-7 py-4 bg-[#023142] flex justify-between items-center'}>
            <img src={'./favicon.png'} alt={'profile picture logo'} className={'w-9'}/>
            <div className={'flex gap-9 text-sm'}>
                <a href="/"><p>Experience</p></a>
                <a href="/interests"><p>Interests</p></a>
                <a href="/blog"><p>Blog</p></a>
                <a href="/contact"><p>Contact</p></a>
            </div>
            <div className={'flex gap-4'}>
                <img src={'./icons/light_mode_icon.svg'} alt={'dark mode toggle'} className={'w-5'}/>
                <img src={'./icons/adhd_icon.png'} alt={'adhd mode toggle'} className={'w-5'}/>
                <a href="https://github.com/ccentrella" rel={'noopener'} target={'_blank'}
                   className={'hover:opacity- transition-opacity'}><img src={'./icons/github_icon.svg'}
                                                                        alt={'github link'} className={'w-5'}/></a>
            </div>
        </div>
    );
}

export default Header;