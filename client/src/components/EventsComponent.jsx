import React from 'react';

const EventsComponent = () => {

    return (
        <div className="container mx-auto h-full font-mono">
            <header>
                <h1 className="text-3xl font-bold text-center my-8">Welcome to RunClub...</h1>
                <p className="text-center mb-8">The Capital Region's best training partners.</p>
            </header>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Our Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="./public/TrackImage.jpg" alt="Documents" className="h-64 max-w" />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">RunClub Community</h2>
                            <p>Participate in the RunClub Community.</p>
                            <div className="card-actions justify-end">
                            <a className="group relative" href="https://www.facebook.com/groups/259027783894516"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Join the Facebook Group</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                                
                            </div>
                        </div>
                    </div>
                    {/* second card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src=".\public\WinterRun.jpeg" alt="Assets" className="h-64 max-w" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Train with us</h2>
                            <p>Join our strava club, come to workouts and long runs.</p>
                            <div className="card-actions justify-end">
                            <a className="group relative" href="https://www.strava.com/clubs/runclubtc"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Join Our Strava</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                               
                            </div>
                        </div>
                    </div>
                    {/* third card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                                <img src="./public/bert_stockade_finish.jpg" alt="Shoes" className="h-64 max-w" />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Race Project 13.1</h2>
                            <p>We will be staying at an AirBNB, and racing fast half marathons</p>
                            <div className="card-actions justify-end">
                            <a className="group relative" href="https://runsignup.com/Race/NY/Congers/Project131"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Sign Up for Project 13.1</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first second layer card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="./public/MayorCup.jpeg" alt="Documents" className="h-64 max-w" />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title">Mayors Cup Team</h2>
                            <p>Help us win the 2025 Mayors Cup!</p>
                            <div className="card-actions justify-end">
                            <a className="group relative" href="https://docs.google.com/forms/d/e/1FAIpQLSdGRDxY7h3bLHVBPEFZREcoUdlBMSc2osVkSWXSmi8lAdo3-w/viewform?usp=sf_link"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Fill out our survey</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                            </div>
                        </div>
                    </div>
                    {/* second second layer card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="./public/RunClubTent.jpg" alt="Shoes" className="h-64 max-w" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Run Road Races with us.</h2>
                            <p>Stockadeathon, FireCracker Four, and more...</p>
                            <div class="card-actions justify-end">
                            <a className="group relative" href="https://www.instagram.com/runclubtc/"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Check Us out on Instagram</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                            </div>
                        </div>
                    </div>
                    {/* third second layer card */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="./public/clubicon.jpg" alt="Shoes" className="h-64 max-w" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Get Private Coaching.</h2>
                            <p>Find out more about being a sponsored athlete for RunClub.</p>
                            <div className="card-actions justify-end">
                            <a className="group relative" href="mailto:runclubhousesllc@gmail.com"><div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-black bg-secondary px-6 font-medium text-black transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Email Us</div><div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-8 hover:text-gray-200">Contact Us</h1>

                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg mb-4 hover:text-gray-200">For inquiries and further information, please contact us:</p>
                        <ul className="list-disc pl-6">
                            <li className="hover:text-gray-200">Email: runclubhousesllc@gmail.com </li>
                            <li className="hover:text-gray-200">Phone: (518)878-7754</li>
                            <li className="hover:text-gray-200 text-info font-bold"><a href="https://www.instagram.com/runclubtc/">Instagram</a></li>
                            <li className="hover:text-gray-200 text-info font-bold"><a href="https://www.facebook.com/groups/259027783894516">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsComponent;