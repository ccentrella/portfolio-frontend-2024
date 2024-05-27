import React from 'react';
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
        <div className={'container flex flex-wrap gap-5 justify-between'}>
            <Card tag={'Developer Experience'}>
                Led effort to upgrade react pipeline, improving developer experience by 50%.
            </Card>
            <Card tag={'Maintainability'}>
                Refactored existing React components, reducing time to update by 500%.
            </Card>
        </div>
    )
}

function Index() {
    return (
        <div className={'bg-cyan-950'}>
            <Hero/>
            <ProfessionalExperience/>
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
