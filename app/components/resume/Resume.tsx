import Card from "~/components/Card";
import styles from './styles.module.css';

function Resume() {

    const professionalExperience = [
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
        <div className={'container my-10'}>
            <h2 className={'text-2xl pt-5 pb-0 text-primary'}>Professional Experience</h2>
            <div className={'flex'}>
                <div className={'border-l-[3px] border-l-cyan-700 ml-1 pl-7 mt-[40px]'}></div>
                <div>
                    {professionalExperience.map(experience => (
                        <div className={styles.timelineCircle} key={experience.id}>
                            <p className={'text-cyan-700 text-sm font-extrabold'}>{experience.title}, {experience.company}</p>
                            <p className={'text-xs font-light text-gray-500'}>{experience.date}</p>
                            <ul className={'mt-2.5 list-disc list-inside'}>
                                {experience.accomplishments.map(accomplishment => <li
                                    key={accomplishment}>{accomplishment}</li>)}
                            </ul>
                        </div>
                    ))}
                    <div className={`${styles.timelineCircle} before:top-3 mt-[-32px]`}></div>
                </div>
            </div>
            <h2 className={'text-2xl pt-16 pb-10 text-primary'}>Qualifications</h2>
            <div className={'gap-y-5 flex flex-wrap justify-between'}>
                <Card title={'Skills'}>
                    {qualifications.skills.map(section => (
                        <p className={'mb-4'} key={section.name}>{section.name}: {section.skills}</p>
                    ))}
                </Card>
                <Card title={'Education'}>
                    <p className={'mb-1'}>{qualifications.education.degree}, Minor
                        in {qualifications.education.minor}</p>
                    <p className={'text-sm font-light text-gray-400'}>{qualifications.education.year} | {qualifications.education.institution}</p>
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
        </div>
    );
}

export default Resume;