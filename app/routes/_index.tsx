import type {MetaFunction} from "@remix-run/node";
import Card from "~/components/Card";
import ColoredSection from "~/components/ColoredSection";
import Section from "~/components/Section";
import HighlightSection from "~/components/HighlightSection";

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"},
    ];
};

export default function Index() {
    return (
        <div>
            <div className={'my-10 flex flex-wrap justify-center'}>
                <ColoredSection>
                    <p className={'pb-7 text-8xl lg:text-9xl text-cyan-500 font-extrabold'}>Hey,</p>
                    <p className={'text-6xl lg:text-7xl ml-1 text-cyan-700 font-extrabold pb-10 transition-opacity duration-500'}>
                        I'm Chris
                    </p>
                </ColoredSection>
                <ColoredSection width={'w-[90%] md:w-[30%]'}>
                    <img src={'favicon.png'} alt={'profile picture'}/>
                </ColoredSection>
            </div>
            <HighlightSection>
                <p className={'text-4xl [line-height:1.25] text-white'}>I'm an avid software engineer, obsessive problem
                    solver, developer advocate. Boosted developer experience on my team by 50%.</p>
            </HighlightSection>
            <div className={'flex flex-wrap space-x-5 justify-around container'}>
                <Section>
                    <h2>Specialties</h2>
                    <Card title={'Developer Advocate'}>
                        I led effort to upgrade our React pipeline, improving developer experience by 50%.
                    </Card>
                    <br/>
                    <Card title={'Obsessive Problem Solver'}>
                        I use Root Cause Analysis to debug, continuously isolating the problem until finding the root
                        issue.
                    </Card>
                    <br/>
                    <Card title={'Continuous Learner'}>
                        I'm committed to continually improving my skills, implementing best practices and creating
                        groundbreaking designs.
                    </Card>
                </Section>
                <Section>
                    <h2>Skills</h2>
                    <Card>
                        React, JavaScript, TypeScript, Webpack 5, Node.js, REST, API Design, AWS (Lambda, API Gateway,
                        EC2, S3, Cloudwatch, IAM), C# .NET, Python, Ruby on Rails, MongoDB, Microservices Architecture,
                        Unit Tests, Integration Tests, Problem Solving, Continuous Learning, Agile, Scrum
                    </Card>
                </Section>
            </div>
        </div>
    );
}
