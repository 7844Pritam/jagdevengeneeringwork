<?php require "includes/header.php"; ?>
<main>
            <div class="min-h-screen  text-gray-800 font-sans">
                <header class="bg-gray-800 text-white py-12 px-6 text-center">
                    <h1 class="text-4xl font-bold">Join Our Team</h1>
                    <p class="mt-2 text-lg">Build your future with us — where passion meets purpose.</p>
                </header>
                <section class="py-16 px-6 max-w-5xl mx-auto text-center">
                    <h2 class="text-3xl font-semibold text-gray-800 mb-10">Why Join Us?</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-briefcase mx-auto text-orange-400"
                                aria-hidden="true">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                            <h3 class="mt-4 font-semibold text-xl">Meaningful Work</h3>
                            <p class="mt-2 text-gray-600">Make an impact with real projects that shape industries.</p>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-users mx-auto text-orange-400"
                                aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <h3 class="mt-4 font-semibold text-xl">Collaborative Culture</h3>
                            <p class="mt-2 text-gray-600">Work with passionate, supportive, and driven teammates.</p>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-heart-handshake mx-auto text-orange-400"
                                aria-hidden="true">
                                <path
                                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                                </path>
                                <path
                                    d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66">
                                </path>
                                <path d="m18 15-2-2"></path>
                                <path d="m15 18-2-2"></path>
                            </svg>
                            <h3 class="mt-4 font-semibold text-xl">Growth &amp; Balance</h3>
                            <p class="mt-2 text-gray-600">We invest in your growth — without compromising your life.</p>
                        </div>
                    </div>
                </section>
                <section class=" py-16 px-6">
                    <div class="max-w-9xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <img alt="Career Opportunities at JEW Steel - Join PEB Industry Leader Lucknow" 
                             title="Build Your Career with JEW Steel - Engineering & Manufacturing Jobs"
                             class="w-full h-auto rounded-lg object-cover" 
                             src="assets/c2-Cs0gDrIS.jpg">
                        <div>
                            <h2 class="text-2xl font-bold mb-6 text-gray-800">Apply Now</h2>
                            <form class="grid gap-5">
                                <div><label class="block mb-1 font-medium">Full Name</label><input required=""
                                        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        type="text" value="" name="fullName"></div>
                                <div><label class="block mb-1 font-medium">Email</label><input required=""
                                        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        type="email" value="" name="email"></div>
                                <div><label class="block mb-1 font-medium">Position Applying For</label><input
                                        required=""
                                        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        type="text" value="" name="position"></div>
                                <div><label class="block mb-1 font-medium">Cover Letter</label><textarea
                                        name="coverLetter" rows="4" required=""
                                        class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                                </div>
                                <div><label class="block mb-1 font-medium">Upload Resume</label><input required=""
                                        class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-400 file:text-white hover:file:bg-orange-500"
                                        type="file" name="resume"></div><button type="submit"
                                    class="bg-orange-400 text-white font-semibold px-6 py-3 rounded hover:bg-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed">Submit
                                    Application</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
<?php require "includes/footer.php"; ?>
