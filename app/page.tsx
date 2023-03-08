import Image from 'next/image';
import prof from '../public/Gallupprof.jpg';

export default function Page() {
    return (
        <section className="min-w-0 m-auto max-w-7xl">
            <div className="flex flex-row items-start text-xs">
                <figure className='w-1/3 pr-5'>
                    <Image className='w-40 h-auto m-auto rounded-full' src={prof} alt="Dakota South"/>
                </figure>
                <div className='w-2/3 pl-5 m-auto'>
                    <h1 className="text-6xl font-bold text-primary font-inter">Hi,</h1>
                    <h1 className="text-5xl font-bold text-primary font-inter">I&apos;m Dakota</h1>
                    <h2 className="text-3xl font-bold text-tertiary font-inter">Software Engineer</h2>    
                </div>
            </div>
            <div className='items-start gap-10 text-left text-white flex-column justify-items-start mt-7'>
                <h3 className='pt-10 text-2xl font-bold text-primary font-inter'>About</h3>
                <div className='text-xl text-secondary'>
                Software Developer with a strong foundation 
                in programming languages such as Java, Python, 
                and C#, as well as experience/success in competitive 
                programming.
                </div>
            </div>
            <div className='flex flex-col text-left flex-nowrap mt-7'>
                <h3 className='text-2xl font-bold text-primary'>Experience</h3>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-end'>
                        <div className='mr-3 text-xl text-secondary'><p>May 2022 - Dec 2022</p></div>
                        <div className='max-w-sm text-secondary'>
                            <a className='text-xl text-primary'>Software Developer Intern - Gallup</a>
                            <div className='mt-2 text-xl text-secondary'>
                            Worked on a team of 5 to develop a <span className='text-primary'>.NET </span>
                            app using <span className='text-primary'>C#</span> and <span className='text-primary'>SQL</span> to automate Gallups
                            QA process as well as a <span className='text-primary'>React</span> app to display 
                            the results of an ML model.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-end mt-3'>
                        <div className='mr-3 text-xl text-secondary'><p>Jan 2023 - Present</p></div>
                        <div className='max-w-sm text-secondary'>
                            <a className='text-xl text-primary'>Software Developer - Gallup</a>
                            <div className='mt-2 text-xl text-secondary'>
                            Full-stack development with tools such as <span className='text-primary'>AWS</span>, <span className='text-primary'>.NET</span>, and <span className='text-primary'>Blazor</span> to create
                            and maintain systems for Gallup and our clients. These systems
                            handle large amounts of data and are used by thousands of people. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-7'>
                <h3 className='text-2xl font-bold text-primary'>Education</h3>
                <div className=''>
                    <div className='text-xl text-secondary'><p>Aug 2019 - Dec 2022</p></div>
                    <div className='mt-4 text-xl text-primary'>
                    <a href='https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science'>University of South Dakota</a>
                    <div className='text-xl text-secondary'>
                        <ul className='ml-6 list-disc'>
                        <li>Major: Computer Science</li>
                        <li>Minor: Mathematics</li>
                        <li>Specialization: Artificial Intelligence</li>
                        </ul>
                        <div className='mt-5'>
                            <div className='text-primary'>Relevant Coursework :</div>
                            <ul className='ml-6 list-disc'>
                                <li>Algorithms & Data Structures</li>
                                <li>Software Engineering</li>
                                <li>Machine Learning</li>
                                <li>Data Mining</li>
                                <li>Human Computer Interaction</li>
                                <li>Machine Organization</li>
                                <li>Networks and Security</li>
                                <li>Operating Systems</li>
                                <li>Information Retrieval</li>
                                <li>High Performance Computing</li>
                            </ul>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
            <div className='flex flex-col gap-3 mt-6 text-left'>
                <h3 className='text-2xl font-bold text-primary'>Projects</h3>
                <div className='flex flex-row gap-6'>
                    <div className='text-xl text-secondary'><p>JavaScript</p></div>
                    <div className='text-xl text-primary'><a href='https://github.com/dakotasouth'>Annotate Chrome Extension</a></div>
                </div>
                <div className='flex flex-row gap-6'>
                    <div className='text-xl text-secondary'><p>Python</p></div>
                    <div className='text-xl text-primary'><a href='https://github.com/dakotasouth'>Weaver Solver</a></div>
                </div>
                <div className='flex flex-row gap-6'>
                    <div className='text-xl text-secondary'><p>Python</p></div>
                    <div className='text-xl text-primary'><a href='https://github.com/dakotasouth'>Stock Ticker Search</a></div>
                </div>
            </div>
        </section>
    );
}