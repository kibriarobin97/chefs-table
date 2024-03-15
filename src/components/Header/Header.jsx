const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </button>
                        </label>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:m-0 m-3'>
                <div className="hero md:min-h-96 rounded-lg bg">
                    <div className="hero-overlay bg-gradient-to-b from-[#150B2B] object-cover bg-center bg-opacity-60 rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="text-3xl md:text-5xl font-bold">Discover an exceptional cooking<br />class tailored for you!</h1>
                            <p className="my-5 w-2/3 mx-auto">Welcome to our website, where you can explore a diverse collection of mouthwatering recipes along with detailed calorie information.</p>
                            <div className='flex items-center gap-2 justify-center'>
                                <button className="btn rounded-full bg-[#0BE58A] border-none">Explore Now</button>
                                <button className="btn rounded-full border-white btn-outline text-white">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;