import Image from 'next/image';
import prof from '../public/Gallupprof.jpg';

export default function Page() {
    return (
        <section className="min-w-0 m-auto max-w-7xl">
            <div className="flex flex-row items-start text-xs">
                <figure className='w-1/3 pr-5'>
                    <Image className='w-40 h-auto m-auto rounded-full' src={prof} alt="Dakota South"/>
                </figure>
                <div className="w-2/3 pl-5 m-auto">
                    <h1 className="text-5xl font-bold sm:text-6xl text-primary">Hi,</h1>
                    <h1 className="text-4xl font-bold sm:text-5xl text-primary">I&apos;m Dakota</h1>
                    <h2 className="text-3xl font-bold sm:text-3xl text-tertiary">Software Engineer</h2>    
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
                <div className="flex flex-col md:flex-row">
                    <div className="mr-3 text-xl text-secondary">
                        <p className="whitespace-nowrap">Jan 2023 - Present</p>
                    </div>
                    <div className="max-w-sm mt-4 text-secondary md:mt-0">
                        <a className="text-xl text-primary">Software Developer - Gallup</a>
                        <div className="mt-2 text-xl text-secondary">
                            Full-stack development with tools such as 
                            <span className="text-primary">AWS</span>, 
                            <span className="text-primary">.NET</span>, and 
                            <span className="text-primary">Blazor</span> to create
                            and maintain systems for Gallup and our clients. These systems
                            handle large amounts of data and are used by thousands of people. 
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-end mt-3 md:flex-row">
    <div className="mr-3 text-xl text-secondary">
        <p className="whitespace-nowrap">May 2022 - Dec 2022</p>
    </div>
    <div className="max-w-sm mt-4 text-secondary md:mt-0">
        <a className="text-xl text-primary">Software Developer Intern - Gallup</a>
        <div className="mt-2 text-xl text-secondary">
            Worked on a team of 5 to develop a <span className="text-primary">.NET </span>
            app using <span className="text-primary">C#</span> and <span className="text-primary">SQL</span> to automate Gallup&apos;s
            QA process as well as a <span className="text-primary">React</span> app to display 
            the results of an ML model.
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