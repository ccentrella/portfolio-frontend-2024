import type {MetaFunction} from "@remix-run/node";
import ColoredSection from "~/components/ColoredSection";
import Capsule from "~/components/Capsule";
import Card from "~/components/Card";
import Carousel from "~/components/Carousel";
import {useEffect, useState} from "react";

function HeroSplashscreen() {
    return (
        <div className={"flex flex-wrap"}>
            <div className={`px-10 lg:px-16 pt-32 pb-20 w-[100%] bg-cyan-100 rounded-b-[40px]`}>
                <p className={"pb-7 text-8xl lg:text-9xl text-cyan-500 font-extrabold"}>Hey,</p>
                <p className={"text-6xl lg:text-7xl ml-1 text-cyan-700 font-extrabold pb-10 transition-opacity duration-500"}>
                    I'm Chris
                </p>
                <img className={'m-auto pb-10 max-w-[80%]'} src={"favicon.png"} alt={"profile picture"}/>
                <Capsule>
                    Frontend Engineer
                </Capsule>
            </div>
        </div>
    );
}

function HeroAnimation() {
    const [index, setIndex] = useState(0);

    const adjectives = [
        {text: 'intuitive', color: '#1CB9D4'},
        {text: 'beautiful', color: '#D470BE'},
        {text: 'colorful', color: '#06D4D1'},
        {text: 'custom', color: '#EBC57A'}
    ];

    const iconList = [
        {src: 'icons/resume_icon.svg', alt: 'view resume' },
        {src: 'icons/github_icon.svg', alt: 'github repository' },
        {src: 'icons/linkedin_icon.svg', alt: 'linkedin profile' }
    ];

    useEffect(() => {
        const next = setTimeout(() =>
            setIndex(previous => (previous + 1) % 4), 2000);

        return () => clearTimeout(next);
    }, [index]);

    return (
        <div className={'container my-20 pt-20 pl-12 pb-14 bg-primary'}>
            <p className={'mb-5 text-7xl text-cyan-50 font-black'}>I Create</p>
            <p className={'text-3xl transition-colors [transition-duration:1s]'} style={{color: adjectives[index].color}}>{adjectives[index].text}</p>
            <p className={'text-3xl [line-height:1.75rem] text-cyan-50'}>user experiences</p>
            <div className={'mt-16 flex space-x-5'}>
                {iconList.map(icon => <img key={icon.src} className={'w-10 inline-block'} src={icon.src} alt={icon.alt}/>)}
            </div>
        </div>
    );
}

function CityIllustration() {
    return (
        <div className={'my-16'}>
            <img className={'m-7 mb-12'} src={'city.svg'} alt={'city illustration'}/>
            <Capsule>
                <img className={'inline w-10 pr-3'} src={'icons/location_icon.svg'} alt={'map icon'}/>
                <span>Nashville, TN</span>
            </Capsule>
        </div>
    );
}

function Recommendations() {
    const recommendationList = [
        {
            id: 0,
            'name': 'David Yarbrough',
            'recommendation': '&ldquo;When I first met Chris, I was struck by two outstanding qualities: his blazing technical acumen and his relentless pursuit of excellence. In the time that we\'ve worked together I have seen these qualities in action, both in his individual work and in the way that he works with his team: he\'s confident in his own considerable knowledge and abilities, and also conscious of his own limitations and eager to learn from his teammates. He actively seeks out collaboration in a way that helps the entire team improve. He\'s a voracious and thoughtful reader and has a knack for synthesizing data into concrete recommendations, which he then presents to the team to workshop into new solutions.  In short, he\'s an excellent engineer and an excellent teammate, and would improve any team he joined.&rdquo;'
        },
        {
            id: 1,
            'name': 'Christian Enamorado',
            'recommendation': 'Christopher is one of those rare developers who is willing to go the distance and then some to hone his skills. Given the proper opportunities and guidance that willingness fueled by his optimism will make him a valued member of any team. During my time working with him, he showed time and time again that he wanted to work with others to build something greater.'
        },
        {
            id: 2,
            'name': 'Sarah Johnson MiddleBrook',
            'recommendation': 'I had the pleasure of hiring and working with Christopher. During the recruiting process, he had so much excitement around the role and the opportunity to move to Nashville. Even better, he had so much eagerness to learn and grow in a new role. He loves to challenge himself. I knew he would fit in great with the SE team at Groups360. Overall, Christopher is a great software engineer with a creative mind. He\'s only a year and a couple months into his professional career, but once you talk to him it seems like he has had 10+ years of experience. Such a smart and fun guy!'
        }
    ];

    return (
        <div>
            <p className={'text-3xl text-teal-300'}>Here's what coworkers say</p>
            <Carousel source={recommendationList} />
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
        <div>
            {professionalExperienceList.map(experience => (
                <div key={experience.id}>
                    <p className={'text-2xl'}>{experience.title}</p>
                    <p className={'text-sm'}>{experience.date}</p>
                    <ul className={'list-item'}>
                        {experience.accomplishments.map(accomplishment => <li key={accomplishment}>{accomplishment}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}

function Qualifications() {
    const qualifications = {
        education: {
            degree: 'Bachelor of Science in Computer Science',
            minor: 'Software Engineering',
            year: '\'22',
            institution: 'Franciscan University, OH'
        },
        skills: [
            {
                name: 'Frontend',
                skills: 'React, JavaScript, TypeScript, Webpack 5, Node.js, REST, API Design'
            },
            {
                name: 'Backend',
                skills: 'C#, .NET WebAPI, .NET Legacy, Entity Framework, Dependency Injection, Middleware, SQL, MongoDB, PostgreSQL, REST, API Design, AWS (Lambda, API Gateway, EC2, S3, Cloudwatch, IAM), Microservices Architecture'
            },
            {
                name: 'Additional',
                skills: 'Unit Tests, Integration Tests, Problem Solving, Continuous Learning, Agile, Scrum'
            }
        ],
        certificates: [
            'AWS Certified Cloud Practitioner',
            'LinkedIn Assessments: OOP, REST API, C#, HTML, CSS, Machine Learning'
        ],
        awards: [
            {
                name: 'JAMES SALTER AWARD',
                description: 'Top graduating computer science student'
            },
            {
                name: 'Distinguished Contributor',
                description: 'For showing exemplary dedication to Clarifying Catholicism\'s growth'
            }
        ]
    };

    return (
        <div>
            <Card title={'Education'}>
                <p>{qualifications.education.degree}, Minor in {qualifications.education.minor}</p>
                <p className={'text-sm'}>{qualifications.education.year} | {qualifications.education.institution}</p>
            </Card>
            <Card title={'Skills'}>
                {qualifications.skills.map(section => (
                    <p key={section.name}>{section.name}: {section.skills}</p>
                ))}
            </Card>
            <Card title={'Certificates'}>
                {qualifications.certificates.map(certificate => <p key={certificate}>{certificate}</p>)}
            </Card>
            <Card title={'Awards'}>
                {qualifications.awards.map(award=> (
                    <div key={award.name}>
                        <p>{award.name}</p>
                        <p className={'text-sm'}>{award.description}</p>
                    </div>
                ))}
            </Card>
        </div>
    )
}

export default function Index() {
    return (
        <div>
            <HeroSplashscreen/>
            <HeroAnimation/>
            <CityIllustration/>
            <Recommendations/>
            <ProfessionalExperience/>
            <Qualifications/>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"},
    ];
};
