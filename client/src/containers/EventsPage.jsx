import React from 'react';

const EventsPage = () => {

    return (
        <div className="container mx-auto h-full">
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
                            <h2 class="card-title">RunClub Championships</h2>
                            <p>Sign up and support us at RunClub Championships.</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="https://www.athletic.net/TrackAndField/meet/534089/info">Join Us</a>
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
                                <a className="btn btn-primary" href="https://www.strava.com/clubs/runclubtc">Join Us</a>
                            </div>
                        </div>
                    </div>
                    {/* third card */}
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <div class="bg-gray-200 p-4">
                                <img src="./public/CRF-Color.png" alt="Shoes" class="h-64 max-w" />
                            </div>
                        </figure>

                        <div class="card-body">
                            <h2 class="card-title">Race River Run for the Roots</h2>
                            <p>We will be hosting a table, and partying at Roots post event!!</p>
                            <div class="card-actions justify-end">
                                <a className="btn btn-primary" href="http://runsignup.com/Race/NY/SouthGlensFalls/RiverRunfortheRoots">Join Us</a>
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
                                <a className="btn btn-primary" href="https://www.instagram.com/runclubtc/">Join Us</a>
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
                                <a className="btn btn-primary" href="https://www.instagram.com/runclubtc/">Join Us</a>
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
                                <a className="btn btn-primary" href="/ContactPage">Join Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p>Contact us if you are interested in cooordinating events with us.</p>
            </section>
        </div>
    );
};

export default EventsPage;