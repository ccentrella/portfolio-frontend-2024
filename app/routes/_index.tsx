import type {MetaFunction} from "@remix-run/node";
import Card from "~/components/Card";

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"},
    ];
};

export default function Index() {
    return (
        <div className={'p-20'}>
            <div className={''}>
                <p className={'text-6xl text-cyan-900 font-extrabold pb-2.5 pt-[20vh]'}>Chris Centrella</p>
                <p className={'text-6xl text-cyan-500 font-extrabold pb-10'}>Frontend Engineer</p>
            </div>
            <h2>Strengths</h2>
            <Card title={'Developer Advocate'}>
                I led effort to upgrade our React pipeline, improving developer experience by 50%.
            </Card>
            <br/>
            <Card title={'Obsessive Problem Solver'}>
                I use Root Cause Analysis to debug, continuously isolating the problem until finding the root issue.
            </Card>
            <br/>
            <Card title={'Continuous Learner'}>
                I'm committed to continually improving my skills, implementing best practices and creating groundbreaking designs.
            </Card>
            <br/>
            <h2>Skills</h2>
            <Card>
                React, JavaScript, TypeScript, Webpack 5, Node.js, REST, API Design, AWS (Lambda, API Gateway, EC2, S3, Cloudwatch, IAM), C# .NET, Python, Ruby on Rails, MongoDB, Microservices Architecture, Unit Tests, Integration Tests, Problem Solving, Continuous Learning, Agile, Scrum
            </Card>
        </div>
    );
}
