import React, {useEffect, useState} from 'react';
import {MetaFunction} from "@remix-run/react";
import Card from "~/components/Card";

function Hero() {
    return (
        <div className={'h-[90vh] bg-[url("/mountain_background.png")] bg-cover'}>
            <div className={'bg-cyan-700 h-2'}></div>
                <div className={'flex gap-x-16 my-32 h-[45vh] justify-evenly *:h-[100%]'}>
                    <div
                        className={'inline-block w-3/5 lg:w-1/2 p-24 bg-[#011C26] rounded-xl rounded-tl-[3rem] rounded-br-[3rem]'}>
                        <h1 className={'text-5xl mb-5'}>Hey, I'm Chris.</h1>
                        <p className={'text-2xl max-w-[900px] my-5'}>I build software, solve problems, and design user
                            experiences.</p>
                    </div>
                    <img src={'profile.png'} alt={'profile picture'}/>
                </div>

        </div>
    );
}

function ProfessionalExperience() {
    const professionalExperienceList = [
        {
            id: 0,
            title: 'SOFTWARE ENGINEER II',
            company: 'Groups360',
            date: '01/23 - PRESENT',
            accomplishments: [
                'Built .NET Web API microservice, reducing lost client emails by 15%',
                'Collaborated with Product for greenfield project, increasing revenue by 15%',
                'Led effort to upgrade React pipeline, improving developer experience by 50%',
                'Refactored React policy components, reducing time to update by 500%'
            ]
        },
        {
            id: 1,
            title: 'SOFTWARE DEVELOPER',
            company: 'IBM Consulting',
            date: '06/22 - 12/22',
            description: 'Leading consulting agency with $60+ billion in revenue and over 140K clients',
            accomplishments: [
                'Led UX Design for internal project, enhancing user experience by 200%',
                'Built React components to improve employee satisfaction by 20%',
                'Mitigated 50+ client requests for Fortune 500 company with 90% success rate'
            ]
        },
        {
            id: 2,
            title: 'SOFTWARE ENGINEER',
            company: 'St. Paul Center',
            date: '01/22 - 05/22 (internship)',
            description: 'Leading faith-based institution with 20+ courses and over 400 books',
            accomplishments: [
                'Enhanced loading interface, improving user experience by 25%',
                'Refactored React components to support 10+ courses, boosting revenue by 20%',
                'Created administration portal, cutting time for new courses by 15%'
            ]
        },
        {
            id: 3,
            title: 'WEB DEVELOPER',
            company: 'Catholics for Hire',
            date: '06/21 - 03/22 (part time)',
            description: 'Startup consulting agency with 50+ clients and over two dozen services',
            accomplishments: [
                'Built 5+ Wordpress websites, boosting revenue by 25%',
                'Resolved 3+ website outages, resulting in 2X customer trust',
                'Led 3+ projects for prestigious client, contributing to 50% of total revenue'
            ]
        }
    ];

    return (
        <div className={'container flex flex-wrap my-16 justify-between'}>
            <Card tag={'Developer Experience'}>
                Led effort to upgrade react pipeline, improving developer experience by 50%.
            </Card>
            <Card tag={'Maintainability'}>
                Refactored existing React components, reducing time to update by 500%.
            </Card>
        </div>
    )
}

function Recommendations() {
    const [index, setIndex] = useState(0);

    const source = [
        {
            id: 0,
            name: 'David Yarbrough',
            recommendation: [
                'When I first met Chris, I was struck by two outstanding qualities: his blazing technical acumen and his relentless pursuit of excellence. In the time that we\'ve worked together I have seen these qualities in action, both in his individual work and in the way that he works with his team: he\'s confident in his own considerable knowledge and abilities, and also conscious of his own limitations and eager to learn from his teammates. He actively seeks out collaboration in a way that helps the entire team improve. He\'s a voracious and thoughtful reader and has a knack for synthesizing data into concrete recommendations, which he then presents to the team to workshop into new solutions.',
                'In short, he\'s an excellent engineer and an excellent teammate, and would improve any team he joined.'
            ]
        },
        {
            id: 1,
            name: 'Christian Enamorado',
            recommendation: [
                'Christopher is one of those rare developers who is willing to go the distance and then some to hone his skills. Given the proper opportunities and guidance that willingness fueled by his optimism will make him a valued member of any team. During my time working with him, he showed time and time again that he wanted to work with others to build something greater.'
            ]
        },
        {
            id: 2,
            name: 'Sarah Johnson MiddleBrook',
            recommendation: [
                'I had the pleasure of hiring and working with Christopher. During the recruiting process, he had so much excitement around the role and the opportunity to move to Nashville. Even better, he had so much eagerness to learn and grow in a new role. He loves to challenge himself. I knew he would fit in great with the SE team at Groups360. Overall, Christopher is a great software engineer with a creative mind. He\'s only a year and a couple months into his professional career, but once you talk to him it seems like he has had 10+ years of experience. Such a smart and fun guy!'
            ]
        }
    ];

    useEffect(() => {
        const next = setTimeout(() =>
            setIndex(previous => (previous + 1) % source.length), 10000);

        return () => clearTimeout(next);
    }, [index]);

    return (
        <div className={'flex justify-center my-16'}>
            <div className={'bg-cyan-800 max-w-[80%] rounded-3xl'}>
                <div className={'py-16 lg:py-24 container text-cyan-100'}>
                    <p className={'text-4xl text-cyan-100 font-medium my-8 text-center'}>Here's what coworkers say</p>
                    {source[index].recommendation.map(recommendation => <p className={'my-5'}
                                                                           key={recommendation}>{recommendation}</p>)}
                    <div className={'mt-10 py-5 px-10 bg-cyan-500 rounded-[50px] inline-block'}>
                        <p>{source[index].name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DesignerAtHeart() {
    return (
        <div className={'flex justify-center my-16'}>
            <div className={'bg-red-950/60 max-w-[80%] rounded-3xl'}>
                <div className={'py-16 lg:py-24 container text-rose-100 space-y-4'}>
                    <p className={'text-4xl text-rose-100 font-medium my-8 text-center'}>Designer At Heart</p>
                    <p>In a world marred by brokenness, where is goodness and beauty? What can distract from a painful childhood? Serve as a mode of self expression? These questions led me to embrace creativity from an early age. From taking pictures on my compact camera to numerous user interfaces, my creativity began in childhood.</p>
                    <p>As I’ve navigated the world of design since then, I’ve become especially drawn to the Japanese concept of Ma or minimalism. From interior design to apps,I firmly believe less is more. Calming the mind through de-cluttered experiences. Software so intuitive the user experience is in the background. Following the design philosophy of Steve Jobs to achieve sophistication through simplicity.</p>
                </div>
            </div>
        </div>
    );
}

function BuildingSoftware() {
    return (
        <div className={'flex justify-center my-16'}>
            <div className={'bg-teal-800/60 max-w-[80%] rounded-3xl'}>
                <div className={'py-16 lg:py-24 container text-teal-100 space-y-4'}>
                    <p className={'text-4xl text-teal-100 font-medium my-8 text-center'}>&#123;Build&#125;ing Software</p>
                    <p>Over ten years ago, it was my fourteenth birthday. My life was about to change forever. I had expressed interest in writing code, so my parents bought me an introductory book on Visual Basic. Over the course of the next few years, I built several apps of increasing complexity and (almost) never looked back. So began my software engineering journey.</p>
                    <p>One thing I love about software engineering is that you’re building a product. I also love that software engineering is about solving puzzles: What is the best way to solve this problem? Why is the code not working? How do I refactor the code to support this feature?</p>
                </div>
            </div>
        </div>
    );
}

function Index() {
    return (
        <div>
            <Hero/>
            <ProfessionalExperience/>
            <Recommendations />
            <DesignerAtHeart />
            <BuildingSoftware />
        </div>
    )
}

export default Index;

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"}
    ];
}
