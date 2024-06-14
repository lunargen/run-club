import React from 'react';

const EventsComponent = () => {

    return (
        <div className="container mx-auto h-full font-mono">
            <header>
                <h1 className="text-3xl font-bold text-center my-8">Welcome to RunClub Events</h1>
                <p className="text-center mb-8">Join us for a future event.</p>
            </header>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Our Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="./public/TrackImage.jpg" alt="Documents" className="h-64 max-w" />
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">RunClub Community</h2>
                            <p>Participate in the RunClub Community.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="https://www.facebook.com/groups/259027783894516">Join the Facebook Group</a>
                            </div>
                        </div>
                    </div>
                    {/* second card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="./public/WinterRun.jpeg" alt="Assets" className="h-64 max-w" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Train with us</h2>
                            <p>Join our strava club, come to workouts and long runs.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="https://www.strava.com/clubs/runclubtc">Join Our Strava</a>
                            </div>
                        </div>
                    </div>
                    {/* third card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <div class="bg-gray-200 p-4">
                                <img src="./public/runclubmob.jpg" alt="Shoes" class="h-64 max-w" />
                            </div>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Race FireCracker Four with us</h2>
                            <p>We will be hosting a tent, and handing out jerseys!! Use Password "Runfast"</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="https://fc4.squarespace.com/firecracker4">Sign Up for FC4</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* first second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src="./public/MayorCup.jpeg" alt="Documents" className="h-64 max-w" />
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Mayors Cup Team</h2>
                            <p>Help us win the 2024 Mayors Cup!</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="https://docs.google.com/forms/d/e/1FAIpQLSdGRDxY7h3bLHVBPEFZREcoUdlBMSc2osVkSWXSmi8lAdo3-w/viewform?usp=sf_link">Fill out our survey</a>
                            </div>
                        </div>
                    </div>
                    {/* second second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="./public/RunClubTent.jpg" alt="Shoes" className="h-64 max-w" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Run Road Races with us.</h2>
                            <p>Stockadeathon, FireCracker Four, and more...</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="https://www.instagram.com/runclubtc/">Check Us out on Instagram</a>
                            </div>
                        </div>
                    </div>
                    {/* third second layer card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="./public/clubicon.jpg" alt="Shoes" className="h-64 max-w" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Get Private Coaching.</h2>
                            <p>Find out more about being a sponsored athlete for RunClub.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-black" href="mailto:runclubhousesllc@gmail.com">Email Us</a>
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