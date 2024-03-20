import React from 'react';
import {MetaFunction} from "@remix-run/react";
import Card from "~/components/Card";

function Hero() {
    return (
        <div>
            <div className={'container bg-no-repeat'}>
                <h1 className={'text-7xl mt-32 mb-5'}>Hey, my name is Chris.</h1>
                <p className={'text-3xl max-w-[900px] my-5 mb-20'}>I'm an avid software engineer, obsessive problem
                    solver, and developer advocate.</p>
                <div className={'flex flex-wrap gap-5 justify-between'}>
                    {/*<Card tag={'Developer Experience'}>*/}
                    {/*    Led effort to upgrade react pipeline, improving developer experience by 50%.*/}
                    {/*    <div>*/}

                    {/*    </div>*/}
                    {/*</Card>*/}
                    {/*<Card tag={'Maintainability'}>*/}
                    {/*    Refactored existing React components, reducing time to update by 500%.*/}
                    {/*</Card>*/}
                </div>
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
        <div></div>
    )
}

function Index() {
  return (
      <div>
          <Hero />
          <ProfessionalExperience />
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
