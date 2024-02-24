import type {MetaFunction} from "@remix-run/node";
import Capsule from "~/components/Capsule";
import Card from "~/components/Card";
import {useEffect, useState} from "react";

function HeroSplashscreen() {
    return (
        <div
            className={'flex max-lg:flex-col max-lg:items-center justify-evenly px-10 pt-32 pb-20 w-[100%] min-h-[calc(100dvh-48px)] bg-cyan-100 rounded-b-[48px]'}>
            <div className={'pb-16'}>
                <p className={"pb-5 text-8xl min-[500px]:text-[12rem] xl:text-[16rem] text-cyan-500 font-extrabold"}>Hey,</p>
                <p className={"text-6xl min-[500px]:text-7xl ml-1 text-cyan-700 transition-opacity duration-500"}>
                    I'm Chris
                </p>
            </div>
            <div className={'xl:mt-8 flex flex-col gap-12 lg:gap-16 xl:gap-20 items-center'}>
                <img className={'max-[499px]:w-72 max-w-[80%]'} src={"favicon.png"} alt={"profile picture"}/>
                <Capsule>Frontend Engineer</Capsule>
            </div>
        </div>
    )
}

function HeroAnimation() {
    const [index, setIndex] = useState(0);

    const adjectives = [
        {text: 'intuitive', color: '#1CB9D4'},
        {text: 'beautiful', color: '#D470BE'},
        {text: 'colorful', color: '#06D4D1'},
        {text: 'custom', color: '#EBC57A'},
        {text: 'user experiences', color: '#FFFFFF'}
    ];

    const iconList = [
        {src: 'icons/resume_icon.svg', alt: 'view resume', href: 'resume_chris_centrella_frontend_engineer.pdf'},
        {src: 'icons/github_icon.svg', alt: 'github repository', href: 'https://github.com/ccentrella'},
        {src: 'icons/linkedin_icon.svg', alt: 'linkedin profile', href: 'https://linkedin.com/in/ccentrella'}
    ];

    useEffect(() => {
        const nextIndex = (index + 1) % adjectives.length;
        const timeout = nextIndex !== 0 ? 1500 : 4500;

        const next = setTimeout(() => setIndex(nextIndex), timeout);

        return () => clearTimeout(next);
    }, [index]);

    return (
        <div className={'bg-primary'}>
            <div className={'container my-20 pt-32 pb-16 lg:pt-40 pl-12'}>
                <p className={'mb-5 text-7xl text-cyan-50 font-medium'}>
                    I create <span style={{color: adjectives[index].color}}
                                   className={'transition-colors [transition-duration:1s]'}>{adjectives[index].text}</span>
                </p>
                <div className={'mt-24 lg:mt-32  flex space-x-5'}>
                    {iconList.map(icon =>
                        <a key={icon.src}
                           className={'inline-block transition-opacity hover:opacity-75'}
                           href={icon.href}
                           target={'_blank'}
                           rel={'_noopener'}>
                            <img className={'w-10'}
                                 src={icon.src}
                                 alt={icon.alt}/>
                        </a>)}
                </div>
            </div>
        </div>
    );
}

function CityIllustration() {
    return (
        <div className={'mt-16'}>
            <img className={'m-7 mb-12'} src={'city.svg'} alt={'city illustration'}/>
            <Capsule>
                <img className={'inline w-10 pr-3'} src={'icons/location_icon.svg'} alt={'map icon'}/>
                <span>Nashville, TN</span>
            </Capsule>
        </div>
    );
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
        <div className={'py-16 mt-24 container bg-teal-600 text-teal-100'}>
            <p className={'text-2xl text-teal-100 font-extrabold my-8'}>Here's what coworkers say</p>
            {source[index].recommendation.map(recommendation => <p className={'my-5'} key={recommendation}>{recommendation}</p>)}
            <div className={'mt-10 py-5 px-10 bg-teal-900 rounded-[50px] inline-block'}>
                <p>{source[index].name}</p>
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
        <div className={'container'}>
            <h2 className={'text-2xl pt-5 pb-0 text-primary'}>Professional Experience</h2>
            <div className={'flex'}>
                <div className={'border-l-[3px] border-l-cyan-700 ml-1 pl-7 mt-[40px]'}></div>
                <div>
                    {professionalExperienceList.map(experience => (
                        <div className={'timeline-circle'} key={experience.id}>
                            <p className={'text-cyan-700 text-sm font-extrabold'}>{experience.title}, {experience.company}</p>
                            <p className={'text-xs font-light text-gray-500'}>{experience.date}</p>
                            <ul className={'mt-2.5 list-disc list-inside'}>
                                {experience.accomplishments.map(accomplishment => <li
                                    key={accomplishment}>{accomplishment}</li>)}
                            </ul>
                        </div>
                    ))}
                    <div className={'timeline-circle before:top-3 mt-[-32px]'}></div>
                </div>

            </div>
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
                name: 'DISTINGUISHED CONTRIBUTOR',
                description: 'For showing exemplary dedication to Clarifying Catholicism\'s growth'
            }
        ]
    };

    return (
        <div className={'container space-y-5'}>
            <Card title={'Education'}>
                <p className={'text-[0.93rem] mb-1'}>{qualifications.education.degree}, Minor
                    in {qualifications.education.minor}</p>
                <p className={'text-sm font-light text-gray-400'}>{qualifications.education.year} | {qualifications.education.institution}</p>
            </Card>
            <Card title={'Skills'}>
                {qualifications.skills.map(section => (
                    <p className={'mb-4'} key={section.name}>{section.name}: {section.skills}</p>
                ))}
            </Card>
            <Card title={'Certificates'}>
                {qualifications.certificates.map(certificate => <p className={'mb-4'}
                                                                   key={certificate}>{certificate}</p>)}
            </Card>
            <Card title={'Awards'}>
                {qualifications.awards.map(award => (
                    <div className={'mb-4'} key={award.name}>
                        <p>{award.name}</p>
                        <p className={'text-sm font-light text-gray-400'}>{award.description}</p>
                    </div>
                ))}
            </Card>
        </div>
    )
}

function About() {

    return (
        <div>
            <div className={'container my-16 py-20 bg-rose-900 text-rose-50 space-y-5'}>
                <h3 className={'text-center text-rose-50 py-5'}>Designer at Heart</h3>
                <p>In a world marred by brokenness, where is goodness and beauty? What can distract from a painful
                    childhood? Serve as a mode of self expression? These questions led me to embrace creativity from an
                    early age. From taking pictures on my compact camera to numerous user interfaces, my creativity
                    began in childhood.</p>
                <p>As I’ve navigated the world of design since then, I’ve become especially drawn to the Japanese
                    concept of Ma or minimalism. From interior design to apps, I firmly believe less is more. Calming
                    the mind through de-cluttered experiences. Software so intuitive the user experience is in the
                    background. Following the design philosophy of Steve Jobs to achieve sophistication through
                    simplicity.</p>
                <p className={'pt-5 pr-5 text-right'}><a className={'px-8 py-3 bg-rose-50 rounded-3xl text-rose-900'}>About
                    Me</a></p>
            </div>
            <div className={'container my-16 space-y-5'}>
                <h3 className={'text-center py-5'}>&#123;Build&#125; Software</h3>
                <p>Over ten years ago, it was my fourteenth birthday. My life was about to change forever. I had
                    expressed interest in writing code, so my parents bought me an introductory book on Visual Basic.
                    Over the course of the next few years, I built several apps of increasing complexity and (almost)
                    never looked back. So began my software engineering journey.</p>
                <p>One thing I love about software engineering is that you’re building a product. I also love that
                    software engineering is about solving puzzles: What is the best way to solve this problem? Why is
                    the code not working? How do I refactor the code to support this feature?</p>
                <p className={'pt-10 pr-5 text-center'}><a
                    className={'px-8 py-5 bg-primary rounded-[50px] text-cyan-100'}>Design Principles</a></p>
            </div>
            <div className={'container my-16 py-20 bg-teal-900 text-teal-50 space-y-5'}>
                <h3 className={'text-center text-teal-50 py-5'}>Finding Purpose</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula leo lectus, ut consectetur
                    diam consequat ut. Fusce dignissim fringilla nisi ac auctor. Mauris malesuada, lectus a malesuada
                    posuere, leo ipsum tincidunt diam, eget pulvinar urna velit vel risus. Maecenas eu enim quam. Morbi
                    sit amet tellus quis lacus fermentum imperdiet at sed neque.</p>
                <p>Pellentesque facilisis lacus nibh, ut posuere mauris sagittis quis. Maecenas nec
                    ullamcorper tellus, ac aliquet lacus. Vivamus egestas, tortor et egestas sollicitudin, elit lorem
                    laoreet metus, quis suscipit est ligula in arcu. Duis id varius dolor. In vestibulum sollicitudin
                    magna
                    id pulvinar. Nulla euismod mi at urna maximus, eu dignissim ante gravida.</p>
                <p className={'pt-5 pr-5 text-right'}>
                    <a className={'px-8 py-3 bg-teal-50 rounded-3xl text-teal-900'}>About Me</a>
                </p>
            </div>
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
            <About/>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"},
    ];
};
