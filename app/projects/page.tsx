export default function Page() {
    return (
        <section className="min-w-0 m-auto mx-auto max-w-7xl font-inter">
            <h2 className="text-5xl font-bold text-secondary font-inter">Projects</h2>
            <div className="py-5">
                <h3 className='text-3xl font-bold text-primary'>Weaver Solver</h3>
                <div className="py-2 text-2xl text-secondary font-inter">
                    This <span className="text-primary">Python</span> program is a solver for the game <a className='text-primary' href='https://wordwormdormdork.com/'>Weaver</a>.
                    It uses a <span className="text-primary">breadth-first-search</span> algorithm to find all possible solutions to a given board.
                </div>
            </div>
            <div className="py-5">
                <h3 className='text-3xl font-bold text-primary'><a href="https://github.com/dakotasouth/stock-ticker-search">Stock Ticker Search</a></h3>
                <div className="py-2 text-2xl text-secondary font-inter">
                    This <span className="text-primary">Python</span> program scrapes Reddit data through an 
                    <span className="text-primary"> API</span> to find the most mentioned stock tickers from a recent date. It then provides the user with
                    helpful information about the correspoding stock such as the current price, the 52-week high,
                    and the 52-week low to help the user make a better informed decision.
                </div>
            </div>
            <div className="py-5">
                <h3 className='text-3xl font-bold text-primary'><a href="https://github.com/dakotasouth/shared-pages-chrome-extension">Annotate Chrome Extension</a></h3>
                <div className="py-2 text-2xl text-secondary font-inter">
                    This is a <span className="text-primary">JavaScript</span> Chrome extension that 
                    allows the user to highlight text on a webpage and bookmark with the annotations. 
                    The user can then resume reading the page at a later time and view the annotations.
                </div>
            </div>
        </section>
    );
}