export default function Page() {
    return (
        <section className="min-w-0 m-auto mx-auto max-w-7xl font-sfpro">
            <h2 className="text-5xl font-bold text-secondary">Projects</h2>
            <div className="py-5">
                <h3 className='text-3xl font-bold underline text-primary'><a href="https://weaversolver.tech/">Weaver Solver</a></h3>
                <div className="py-2 text-2xl text-secondary">
                    This is a website that uses <span className='text-primary'>PyScript</span> to implement a solver for the game <a href="https://wordwormdormdork.com/">Weaver</a>. 
                    The solving algorithm performs a <span className='text-primary'>breadth-first search</span> to find the shortest tranformation path from the
                    starting word to the target word.
                </div>
            </div>
            <div className="py-5">
                <h3 className='text-3xl font-bold underline text-primary'><a href="https://github.com/dakotasouth/stock-ticker-search">Stock Ticker Search</a></h3>
                <div className="py-2 text-2xl text-secondary ">
                    This <span className="text-primary">Python</span> program scrapes Reddit data through an 
                    <span className="text-primary"> API</span> to find the most mentioned stock tickers from a recent date. It then provides the user with
                    helpful information about the correspoding stock such as the current price, the 52-week high,
                    and the 52-week low to help the user make a better informed decision.
                </div>
            </div>
            <div className="py-5">
                <h3 className='text-3xl font-bold underline text-primary'><a href="https://github.com/dakotasouth/shared-pages-chrome-extension" >Annotate Chrome Extension</a></h3>
                <div className="py-2 text-2xl text-secondary ">
                    This is a <span className="text-primary">JavaScript</span> Chrome extension that 
                    allows the user to highlight text on a webpage and bookmark with the annotations. 
                    The user can then resume reading the page at a later time and view the annotations.
                </div>
            </div>
        </section>
    );
}