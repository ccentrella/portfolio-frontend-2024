import React from 'react';

function Index(props) {
    return (
        <div className={'min-h-[100vh] bg-[#037D97] grid grid-cols-[3.8fr_6.2fr]'}>
            <div className={'flex flex-col justify-between p-14'}>
                <div className={'flex flex-col justify-center'}>
                    <img src={'profile.png'} alt={'profile picture'} className={'w-[50%] rounded-2xl'}/>
                </div>
                <div className={''}>
                    <p className={'text-cyan-200'}>Sup? My name is </p>
                    <p className={'text-4xl font-medium'}>Chris Centrella.</p>
                </div>
            </div>
            <div className={'flex flex-col justify-center p-24'}>
                <div className={'min-h-[65vh] bg-cyan-300 rounded-2xl'}></div>
            </div>
        </div>
    );
}

export default Index;