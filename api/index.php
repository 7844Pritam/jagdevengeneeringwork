<?php require "includes/header.php"; ?>

<main>
    <div class="relative">
        <div
            class="relative w-full mx-auto h-[600px] overflow-hidden shadow-2xl transition-opacity duration-1000 opacity-100">
            <!-- Overlay Text -->
            <div class="absolute inset-0 flex flex-col items-center justify-center z-20 text-white pointer-events-none">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Welcome</h1>
                <p class="text-2xl md:text-5xl font-bold drop-shadow-lg text-center">Jagdev Engineering Works Pvt. Ltd.
                </p>
                <p class="text-2xl md:text-3xl font-bold drop-shadow-lg text-center">Pre - Engineering Building Solution
                </p>
            </div>

            <!-- Slider Track (Added id="slider-track") -->
            <div id="slider-track" class="flex h-full transition-transform duration-700 ease-in-out"
                style="transform: translateX(0%);">
                <div class="min-w-full h-full relative bg-gray-900">
                    <img alt="PEB Warehouse Construction in Lucknow - Pre-Engineered Building by JEW Steel" 
                         title="Modern PEB Warehouse - Fast Construction, Cost-Effective Solution"
                         class="w-full h-full object-cover brightness-75"
                         src="assets/werehouse1-Bx8UtA3o.jpg">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);"></div>
                </div>
                <div class="min-w-full h-full relative bg-gray-900">
                    <img alt="Industrial Steel Warehouse Structure - PEB Manufacturing Lucknow" 
                         title="Large Span PEB Warehouse - JEW Steel Pvt. Ltd."
                         class="w-full h-full object-cover brightness-75"
                         src="assets/werehouse2-m8bU9kLf.jpg">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);"></div>
                </div>
                <div class="min-w-full h-full relative bg-gray-900">
                    <img alt="PEB Multi-Story Building Construction - Pre-Engineered Multi-Storey Structure" 
                         title="Multi-Story PEB Building - Commercial & Industrial Solutions"
                         class="w-full h-full object-cover brightness-75"
                         src="assets/pebmultistory-BhT1qQU0.jpg">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);"></div>
                </div>
                <div class="min-w-full h-full relative bg-gray-900">
                    <img alt="Pre-Engineered Multi-Storey Building Project - Steel Structure Lucknow" 
                         title="Completed PEB Multi-Story Project by JEW Steel"
                         class="w-full h-full object-cover brightness-75"
                         src="assets/pebmultistory1-Xsx0sug1.jpg">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);"></div>
                </div>
            </div>

            <!-- Dots (Added id="dot-container") -->
            <div id="dot-container" class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                <button class="w-3 h-3 rounded-full transition-all duration-300 bg-white scale-125"
                    aria-label="Go to slide 1"></button>
                <button class="w-3 h-3 rounded-full transition-all duration-300 bg-gray-400 hover:bg-gray-200"
                    aria-label="Go to slide 2"></button>
                <button class="w-3 h-3 rounded-full transition-all duration-300 bg-gray-400 hover:bg-gray-200"
                    aria-label="Go to slide 3"></button>
                <button class="w-3 h-3 rounded-full transition-all duration-300 bg-gray-400 hover:bg-gray-200"
                    aria-label="Go to slide 4"></button>
            </div>
        </div>
        <section class="bg-white px-6 py-16 md:px-20 lg:px-32">
            <div class="flex flex-col md:flex-row items-center gap-10">
                <div class="relative w-full md:w-1/2">
                    <img alt="JEW Steel Pre-Engineered Building - Modern Industrial Construction Lucknow" 
                         title="About JEW Steel - Leading PEB Manufacturer in Lucknow"
                         class="w-full rounded-3xl shadow-md"
                         src="assets/about-2-DcmRLHV3.jpg">
                    <img alt="GI Roofing Sheet Manufacturing - Galvanized Iron Sheets by JEW Steel" 
                         title="High-Quality GI Sheets - Durable Roofing Solutions"
                         class="absolute -bottom-10 -left-10 w-2/4 rounded-2xl border-4 border-white shadow-lg"
                         src="assets/Sheet%20Image-W_Izazrg.jpg">
                </div>
                <div class="w-full md:w-1/2 mt-12 md:mt-0">
                    <p class="text-[#f18e02] font-extrabold uppercase text-3xl mb-2">About Us</p>
                    <h2 class="text-3xl md:text-3xl font-bold text-[#1b3c0d] mb-6 leading-snug">Jagdev
                        Engineering Works</h2>
                    <p class="text-gray-600 mb-2 leading-relaxed">Welcome to JEW Steel, your trusted partner in
                        building the future with strength, precision, and reliability.</p>
                    <p class="text-gray-600 mb-4 leading-relaxed">We focus on designing, fabricating, and
                        installing Pre-Engineered Buildings (PEBs) that can be used for multi-story buildings,
                        warehouses, industrial plants, factories, and more. Our buildings are engineered for
                        tensile and compressive strength, and for endurance, cost, and time, solving diverse
                        modern infrastructure challenges. Our project turnaround contingency is highly rated in
                        the industry.</p>
                    <p class="text-gray-600 mb-4 leading-relaxed">Alongside our construction capabilities, we
                        also have in-house manufacturing for Galvanized Iron (GI) roofing sheets. We also have
                        partnerships with industry-insiders that are premium ingredient suppliers. Our roofing
                        systems, whether on new construction or existing buildings, are restorative, durable,
                        and energy-efficient.</p>
                    <p class="text-gray-600 mb-2 leading-relaxed font-bold">Let’s build something remarkable
                        together.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-8">
                        <div class="flex items-center gap-2"><span
                                class="text-green-600 text-lg">✔</span><strong>High-Quality Materials</strong>
                        </div>
                        <div class="flex items-center gap-2"><span
                                class="text-green-600 text-lg">✔</span><strong>Customizable Solutions</strong>
                        </div>
                        <div class="flex items-center gap-2"><span
                                class="text-green-600 text-lg">✔</span><strong>Competitive Pricing</strong>
                        </div>
                        <div class="flex items-center gap-2"><span class="text-green-600 text-lg">✔</span><strong>24 X 7
                                Call &amp; Chat
                                Support</strong></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white px-1 py-20 md:px-20 lg:px-32">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="text-3xl md:text-4xl font-bold text-black mb-2">Why pre-engineered buildings is
                        more affordable?</h2>
                </div>
                <div class="flex flex-col md:flex-row gap-12 items-center">
                    <div class="w-full md:w-1/2">
                    <img alt="Pre-Engineered Building Construction - Cost-Effective PEB Solution Lucknow" 
                         title="Why Choose PEB - Fast, Affordable & Durable Steel Buildings"
                         class="w-full rounded-4xl shadow-md"
                         src="assets/first-Pre-BQmCVHn-.jpg">
                </div>
                    <div class="w-full md:w-1/2 text-gray-700 text-base leading-relaxed ">
                        <p class="mb-4">Thinking about constructing a building? Consider pre-engineered
                            buildings (PEB) for a smarter, more budget-friendly option. Why? PEBs have a nifty
                            design, get made efficiently, and are put together on-site instantly. The beauty of
                            prefabrication lies in the precision it offers, cutting down on wastage and, you
                            guessed it, costs. The controlled manufacturing environment ensures each piece meets
                            the highest standards.</p>
                        <p class="mb-4">PEBs and Galvanized Iron (GI) sheets are also commercially better for
                            the user. PEB sheets give a better ROI because they are low maintenance,
                            rust-resistant and are made out of galvanized steel. PEB sheets are more
                            commercially viable and more insulated. Because of the light reflective roofing, the
                            PEBs also have an industrial lower energy level consumption.</p>
                        <p>But here’s the real kicker—PEB structures go up faster than your regular buildings.
                            Speedy construction equals big savings. It cuts labour costs and trims the overall
                            project time, making it super efficient. At JEW Steel, PEB is down to an art.
                            Choosing us means saving money and getting a tough, long-lasting structure tailored
                            just for you.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white px-6 py-1 md:px-20 lg:px-32">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-14">
                    <h2 class="text-3xl md:text-4xl font-bold text-black mb-2">Benefits Of Pre Engineered
                        Buildings</h2>
                </div>
                <div class="space-y-8 text-gray-700 text-base leading-relaxed">
                    <div>
                        <p><span class="font-semibold text-black">Saving You Money:</span> We give you money in
                            return in project turnaround time. PEB, preengineered buildings, smart design,
                            reduced material wastage, lower construction time gives you monetary returns.</p>
                    </div>
                    <div>
                        <p><span class="font-semibold text-black">Built-in a Flash:</span> Need your space ASAP?
                            PEBs got your back! PEBs pre-fabricated components allow assembly and installation
                            at lightning speed! As quick construction means quick move-in times, the
                            construction time is a great return on your investment.</p>
                    </div>
                    <div>
                        <p><span class="font-semibold text-black">Design That Fits You:</span> PEBs have the
                            style you need, whether you dream of a warehouse, an industrial hub, or a slick
                            commercial space. They're construction chameleons. You get a variety of design
                            options, matching your unique and aesthetic needs.</p>
                    </div>
                    <div>
                        <p><span class="font-semibold text-black">Quality You Can Rely On:</span> With PEBs,
                            built-in worries about quality are gone. PEBs are created in controlled settings,
                            ensuring quality production consistency. They meet and go beyond industry standards
                            in structure and strength, so your structure will stand the test of time.</p>
                    </div>
                    <div>
                        <p><span class="font-semibold text-black">Green and Clean:</span> PEBs are great for
                            your wallet and the environment. Less construction time and materials is a big plus,
                            and cutting construction time and materials is a big plus for your eco-footprint,
                            when compared with traditional construction methods.</p>
                    </div>
                    <div>
                        <p><span class="font-semibold text-black">Maximizing Your Space:</span> PEBs give wide
                            spans and customizable layouts to offer no annoying support columns in the middle.
                            Imagine a space like that.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C] text-white px-6 py-20 md:px-20 lg:px-32">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-bold mb-2 text-white">Our Services</h2>
                        <div class="h-1 w-24 bg-orange-400 mx-auto rounded"></div>
                    </div>
                </div>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                        <img alt="PEB Multi-Story Building Manufacturer Lucknow - Pre-Engineered Multi-Storey Construction" 
                             title="PEB Multi-Story Buildings - Fast & Cost-Effective Solutions"
                             class="h-56 w-full object-cover"
                             src="assets/pre-engineered-multi-storey-buildings-scaled.webp">
                        <div class="p-6 text-[#1C1C1C]">
                            <h3 class="font-bold text-lg mb-3">PEB Multi-Story Building</h3>
                            <p class="text-sm text-gray-700 mb-4 line-clamp-3">Our Pre-Engineered Multi-Story
                                Buildings offer a fast, cost-effective solution, designed with precision and
                                fabricated using high-quality steel.</p><button
                                class="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-300">Read
                                More</button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                        <img alt="PEB Warehouse Construction Lucknow - Pre-Engineered Steel Warehouses" 
                             title="PEB Warehousing Solutions - Large Span Storage Buildings"
                             class="h-56 w-full object-cover"
                             src="assets/pre-engineered-steel-buildings-with-mezzanine-floors-scaled.webp">
                        <div class="p-6 text-[#1C1C1C]">
                            <h3 class="font-bold text-lg mb-3">PEB Warehousing</h3>
                            <p class="text-sm text-gray-700 mb-4 line-clamp-3">Our Pre-Engineered Warehouses are
                                designed to meet diverse storage needs with speed, strength, and efficiency.</p>
                            <button
                                class="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-300">Read
                                More</button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                        <img alt="GI Sheet Manufacturing Lucknow - Galvanized Iron Roofing Sheets" 
                             title="GI Roofing Sheet Manufacturing - High-Quality Metal Sheets"
                             class="h-56 w-full object-cover"
                             src="assets/WhatsApp Image 2025-05-20 at 9.44.11 PM.jpeg">
                        <div class="p-6 text-[#1C1C1C]">
                            <h3 class="font-bold text-lg mb-3">Roofing Sheet Manufacturing</h3>
                            <p class="text-sm text-gray-700 mb-4 line-clamp-3">We manufacture high-quality
                                Galvanized Iron sheets for roofing, cladding, ducting, and industrial
                                applications using advanced technology.</p><button
                                class="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-300">Read
                                More</button>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
                        <img alt="EOT Crane Manufacturing Lucknow - Electric Overhead Traveling Cranes" 
                             title="EOT Crane Manufacturing - Industrial Material Handling Solutions"
                             class="h-56 w-full object-cover"
                             src="assets/eot1-B45rZ9_B.jpg">
                        <div class="p-6 text-[#1C1C1C]">
                            <h3 class="font-bold text-lg mb-3">EOT Crane Manufacturing</h3>
                            <p class="text-sm text-gray-700 mb-4 line-clamp-3">EOT Cranes are heavy-duty lifting
                                machines designed for efficient material handling in industrial environments.
                            </p><button
                                class="bg-[#2E2E2E] text-white py-2 px-4 rounded hover:bg-orange-400 transition duration-300">Read
                                More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white py-20 px-4 md:px-12 lg:px-32 text-center">
            <div class="max-w-7xl mx-auto">
                <p class="text-orange-400 font-semibold text-sm mb-2 uppercase tracking-wide"></p>
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-2 text-black"> Our Work Process</h2>
                    <div class="h-1 w-24 bg-orange-400 mx-auto rounded"></div>
                </div>
                <div class="relative grid grid-cols-1 md:grid-cols-4 gap-16 items-start justify-items-center">
                    <div class="relative flex flex-col items-center">
                        <div
                            class="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-orange-400 text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                            01</div>
                        <div class="bg-orange-400 rounded-[30px] w-28 h-28 flex items-center justify-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512"
                                class="text-white text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z">
                                </path>
                            </svg>
                        </div>
                        <p class="text-[#1C2B0F] font-semibold text-base mt-4">Research &amp; Analysis</p>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div
                            class="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-orange-400 text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                            02</div>
                        <div class="bg-orange-400 rounded-[30px] w-28 h-28 flex items-center justify-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                class="text-white text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M457.01 344.42c-25.05 20.33-52.63 37.18-82.54 49.05l54.38 94.19 53.95 23.04c9.81 4.19 20.89-2.21 22.17-12.8l7.02-58.25-54.98-95.23zm42.49-94.56c4.86-7.67 1.89-17.99-6.05-22.39l-28.07-15.57c-7.48-4.15-16.61-1.46-21.26 5.72C403.01 281.15 332.25 320 256 320c-23.93 0-47.23-4.25-69.41-11.53l67.36-116.68c.7.02 1.34.21 2.04.21s1.35-.19 2.04-.21l51.09 88.5c31.23-8.96 59.56-25.75 82.61-48.92l-51.79-89.71C347.39 128.03 352 112.63 352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 16.63 4.61 32.03 12.05 45.66l-68.3 118.31c-12.55-11.61-23.96-24.59-33.68-39-4.79-7.1-13.97-9.62-21.38-5.33l-27.75 16.07c-7.85 4.54-10.63 14.9-5.64 22.47 15.57 23.64 34.69 44.21 55.98 62.02L0 439.66l7.02 58.25c1.28 10.59 12.36 16.99 22.17 12.8l53.95-23.04 70.8-122.63C186.13 377.28 220.62 384 256 384c99.05 0 190.88-51.01 243.5-134.14zM256 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32z">
                                </path>
                            </svg>
                        </div>
                        <p class="text-[#1C2B0F] font-semibold text-base mt-4">Project Planning</p>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div
                            class="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-orange-400 text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                            03</div>
                        <div class="bg-orange-400 rounded-[30px] w-28 h-28 flex items-center justify-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                                class="text-white text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z">
                                </path>
                            </svg>
                        </div>
                        <p class="text-[#1C2B0F] font-semibold text-base mt-4">Mfd &amp; Fabrication</p>
                    </div>
                    <div class="relative flex flex-col items-center">
                        <div
                            class="absolute -top-4 right-[-10px] z-10 bg-white border-4 border-orange-400 text-[#1C2B0F] w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow">
                            04</div>
                        <div class="bg-orange-400 rounded-[30px] w-28 h-28 flex items-center justify-center">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                class="text-white text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z">
                                </path>
                            </svg>
                        </div>
                        <p class="text-[#1C2B0F] font-semibold text-base mt-4">Delivered Project</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gradient-to-b from-[#2E2E2E] to-[#1C1C1C] text-white pt-10 pb-20 px-4 md:px-12 lg:px-24">
            <div class="container mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-2 text-white">Our Projects</h2>
                    <div class="h-1 w-24 bg-orange-400 mx-auto rounded"></div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
                    <div class="bg-white text-black rounded-xl overflow-hidden shadow-lg"
                        style="opacity: 1; transform: translateY(50px);">
                        <img alt="Steel Structure Factory Project Barabanki - PEB Industrial Building by JEW Steel" 
                             title="Completed Steel Factory Project - 16,145 sq.ft Industrial Structure"
                             class="w-full h-56 object-cover" 
                             src="assets/Project2-KZRbrr9_.jpeg">
                        <div class="p-6 relative">
                            <h3 class="text-xl font-bold mt-1 mb-2">Steel Structure Factory</h3>
                            <div class="flex items-center text-gray-700 text-sm mb-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 mr-2 text-orange-400"
                                    aria-hidden="true">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg><span>Barabanki, UP</span></div>
                            <p class="text-gray-700 text-sm mb-6">Area: 16,145 sq.ft</p><button
                                class="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">Read
                                More</button>
                        </div>
                    </div>
                    <div class="bg-white text-black rounded-xl overflow-hidden shadow-lg"
                        style="opacity: 1; transform: translateY(50px);">
                        <img alt="Transport Nagar PEB Project Lucknow - Pre-Engineered Multi-Story Building" 
                             title="Transport Nagar Project - 18,000 sq.ft Commercial PEB Structure"
                             class="w-full h-56 object-cover"
                             src="assets/pre-engineered-multi-storey-buildings-scaled (1).webp">
                        <div class="p-6 relative">
                            <h3 class="text-xl font-bold mt-1 mb-2">Transport Nagar Project</h3>
                            <div class="flex items-center text-gray-700 text-sm mb-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 mr-2 text-orange-400"
                                    aria-hidden="true">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg><span>Transport Nagar, Lucknow</span></div>
                            <p class="text-gray-700 text-sm mb-6">Area: 18,000 sq.ft</p><button
                                class="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">Read
                                More</button>
                        </div>
                    </div>
                    <div class="bg-white text-black rounded-xl overflow-hidden shadow-lg"
                        style="opacity: 1; transform: translateY(50px);">
                        <img alt="Vrindavan PEB Project Mathura - Industrial Steel Structure by JEW Steel" 
                             title="Vrindavan Project - 15,000 sq.ft Pre-Engineered Building"
                             class="w-full h-56 object-cover" 
                             src="assets/img3-DYfo7gW2.jpg">
                        <div class="p-6 relative">
                            <h3 class="text-xl font-bold mt-1 mb-2">Vrindavan Project</h3>
                            <div class="flex items-center text-gray-700 text-sm mb-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 mr-2 text-orange-400"
                                    aria-hidden="true">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg><span>Vrindavan, Mathura UP</span></div>
                            <p class="text-gray-700 text-sm mb-6">Area: 15,000 sq.ft</p><button
                                class="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">Read
                                More</button>
                        </div>
                    </div>
                    <div class="bg-white text-black rounded-xl overflow-hidden shadow-lg"
                        style="opacity: 1; transform: translateY(50px);"><img alt="Kamlapur Project"
                            class="w-full h-56 object-cover" src="assets/img4-hOmeJBBD.jpg">
                        <div class="p-6 relative">
                            <h3 class="text-xl font-bold mt-1 mb-2">Kamlapur Project</h3>
                            <div class="flex items-center text-gray-700 text-sm mb-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4 mr-2 text-orange-400"
                                    aria-hidden="true">
                                    <path
                                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                    </path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg><span>Kamlapur, UP</span></div>
                            <p class="text-gray-700 text-sm mb-6">Area: 10,000 sq.ft</p><button
                                class="bg-[#2E2E2E] transition-all duration-300 text-white py-2 px-4 rounded hover:bg-orange-400">Read
                                More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white py-16 px-6">
            <div class="max-w-7xl mx-auto text-center">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold mb-2 text-black">Why Choose Us</h2>
                    <div class="h-1 w-24 bg-orange-400 mx-auto rounded"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="bg-white p-6 rounded-3xl border border-gray-300 text-left hover:border-orange-300 group transition-all duration-500"
                        style="opacity: 1; transform: none;">
                        <div class="mb-4 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-house text-orange-400 group-hover:text-orange-300 transition-all duration-300 w-10 h-10"
                                aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                </path>
                            </svg></div>
                        <h3 class="text-lg font-bold text-green-950 mb-2">Efficiency</h3>
                        <p class="text-gray-500 text-sm">We focus on eco-friendly materials and practices to
                            enhance sustainability without compromising quality.</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border border-gray-300 text-left hover:border-orange-300 group transition-all duration-500"
                        style="opacity: 1; transform: none;">
                        <div class="mb-4 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-badge-check text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300"
                                aria-hidden="true">
                                <path
                                    d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z">
                                </path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg></div>
                        <h3 class="text-lg font-bold text-green-950 mb-2">Trust &amp; Warranty</h3>
                        <p class="text-gray-500 text-sm">Your satisfaction is our priority. We provide
                            personalized solutions tailored to your needs.</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border border-gray-300 text-left hover:border-orange-300 group transition-all duration-500"
                        style="opacity: 1; transform: none;">
                        <div class="mb-4 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-thumbs-up text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300"
                                aria-hidden="true">
                                <path d="M7 10v12"></path>
                                <path
                                    d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z">
                                </path>
                            </svg></div>
                        <h3 class="text-lg font-bold text-green-950 mb-2">High Quality Work</h3>
                        <p class="text-gray-500 text-sm">Every aspect of the project is carefully planned and
                            executed to ensure accuracy and perfection.</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border border-gray-300 text-left hover:border-orange-300 group transition-all duration-500"
                        style="opacity: 1; transform: none;">
                        <div class="mb-4 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-headphones text-orange-400 w-10 h-10 group-hover:text-orange-300 transition-all duration-300"
                                aria-hidden="true">
                                <path
                                    d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                                </path>
                            </svg></div>
                        <h3 class="text-lg font-bold text-green-950 mb-2">24*7 Support</h3>
                        <p class="text-gray-500 text-sm">Jagdev Engineering Works is always just a call away to
                            ensure your experience is smooth and hassle-free.</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="bg-white py-10">
            <div id="stats-section"
                class="mx-auto px-6 grid gap-5 grid-cols-2 md:grid-cols-4 transition-all duration-1000"
                style="opacity: 0; transform: translateY(30px);">

                <!-- Item 1 -->
                <div class="stat-card flex flex-col items-center text-center transition-all duration-700 delay-100"
                    style="opacity: 0; transform: translateY(20px);">
                    <div class="bg-orange-400 rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                            class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M431.98 448.01l-47.97.05V416h-128v32.21l-47.98.05c-8.82.01-15.97 7.16-15.98 15.99l-.05 31.73c-.01 8.85 7.17 16.03 16.02 16.02l223.96-.26c8.82-.01 15.97-7.16 15.98-15.98l.04-31.73c.01-8.85-7.17-16.03-16.02-16.02zM585.2 26.74C582.58 11.31 568.99 0 553.06 0H86.93C71 0 57.41 11.31 54.79 26.74-3.32 369.16.04 348.08.03 352c-.03 17.32 14.29 32 32.6 32h574.74c18.23 0 32.51-14.56 32.59-31.79.02-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06l9.77-96zm-75.17 256H71.09L90.1 208h105.97l-11.41 112zm16.29-160H98.24l16.29-96h96.19l-9.77 96zm32.82 160l11.4-112h149.65l11.4 112H233.77zm195.5-256h96.19l16.29 96H439.04l-9.77-96zm26.06 256l-11.4-112H549.9l19.01 112H455.33z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-black text-2xl font-bold" data-target="5">0</h3>
                    <p class="text-[#040e01]">Project Done</p>
                </div>

                <!-- Item 2 -->
                <div class="stat-card flex flex-col items-center text-center transition-all duration-700 delay-200"
                    style="opacity: 0; transform: translateY(20px);">
                    <div class="bg-orange-400 rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512"
                            class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-black text-2xl font-bold" data-target="50">0</h3>
                    <p class="text-[#040e01]">Happy Clients</p>
                </div>

                <!-- Item 3 -->
                <div class="stat-card flex flex-col items-center text-center transition-all duration-700 delay-300"
                    style="opacity: 0; transform: translateY(20px);">
                    <div class="bg-orange-400 rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512"
                            class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-black text-2xl font-bold" data-target="3">0</h3>
                    <p class="text-[#040e01]">Award Winning</p>
                </div>

                <!-- Item 4 -->
                <div class="stat-card flex flex-col items-center text-center transition-all duration-700 delay-400"
                    style="opacity: 0; transform: translateY(20px);">
                    <div class="bg-orange-400 rounded-2xl w-20 h-20 flex items-center justify-center mb-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            class="text-white text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-black text-2xl font-bold" data-target="11">0</h3>
                    <p class="text-[#040e01]">Year of Experienced</p>
                </div>
            </div>
        </div>
        <div class="bg-[#f5f3e9] min-h-screen md:p-32 p-6 sm:px-6 lg:px-8 flex items-center justify-center">
            <div class="w-full max-w-5xl bg-white rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row gap-8"
                style="opacity: 1; transform: none;">
                <div class="flex-1 min-w-0" style="opacity: 1; transform: none;">
                    <h2 class="text-amber-600 tracking-wider text-sm font-medium uppercase mb-3">JAGDEV
                        ENGINEERING WORKS</h2>
                    <h5 class="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1a2e05] leading-snug mb-4">Book
                        Your <br> Free Consultation</h5>
                    <p class="text-gray-600 text-base text-justify">Fill out the form to schedule a free initial
                        consultation and site assessment with our experts. We’ll discuss your requirements and
                        provide tailored solutions for your project.</p>
                </div>
                <form class="flex-1 flex flex-col gap-5 w-full" style="opacity: 1; transform: none;">
                    <div class="relative"><input placeholder="Full Name"
                            class="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                            aria-label="Your full name" required="" type="text" value="" name="fullName"></div>
                    <div class="flex flex-col sm:flex-row gap-5">
                        <div class="relative flex-1"><input placeholder="Email"
                                class="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="Your email address" required="" type="email" value="" name="email">
                        </div>
                        <div class="relative flex-1"><input placeholder="Phone"
                                class="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="Your phone number" required="" type="tel" value="" name="phone">
                        </div>
                    </div>
                    <div class="relative"><textarea name="message" placeholder="Message"
                            class="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-700 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-all duration-300 shadow-sm hover:shadow-md h-40"
                            aria-label="Your message" required=""></textarea></div>
                    <div class="flex justify-start" style="opacity: 1; transform: none;"><button type="submit"
                            class="px-8 py-3.5 text-white bg-amber-500 text-[#1a2e05] font-semibold rounded-full shadow-md hover:bg-amber-600 hover:shadow-lg focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300">Submit</button>
                    </div>
                </form>
            </div>
            <section class="Toastify" aria-live="polite" aria-atomic="false" aria-relevant="additions text"
                aria-label="Notifications Alt+T"></section>
        </div>
        <div class="mt-16 w-full">
            <div class="max-w-7xl mx-auto w-full rounded-lg overflow-hidden shadow-lg"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.0244678044703!2d81.00402985628789!3d26.838395807765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b392eefb69%3A0x42b82060e5a9eb23!2sJagdev%20Engineering%20Works%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749225370229!5m2!1sen!2sin"
                    class="w-full" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</main>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const section = document.getElementById('stats-section');
        const cards = document.querySelectorAll('.stat-card');
        const counters = document.querySelectorAll('.stat-card h3');
        let animated = false;

        // Function to start counting
        function startCounting() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 50; // Speed of counting

                const updateCount = () => {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + "+";
                    }
                };
                updateCount();
            });
        }

        // Observer to reveal elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    // Reveal the main container
                    section.style.opacity = "1";
                    section.style.transform = "translateY(0)";

                    // Reveal cards one by one (staggered)
                    cards.forEach(card => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    });

                    // Start the number counter
                    startCounting();
                    animated = true;
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of section is visible

        observer.observe(section);
    });
</script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('#dot-container button');
    let currentIndex = 0;
    const totalSlides = dots.length;
    let slideInterval;

    // Function to update slider position and dots
    function goToSlide(index) {
        currentIndex = index;
        // Move the slides
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dot styles
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.replace('bg-gray-400', 'bg-white');
                dot.classList.add('scale-125');
            } else {
                dot.classList.replace('bg-white', 'bg-gray-400');
                dot.classList.remove('scale-125');
            }
        });
    }

    // Automatic Sliding
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % totalSlides;
            goToSlide(nextIndex);
        }, 5000); // Change slide every 5 seconds
    }

    // Click events for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); // Stop auto-slide when user interacts
            goToSlide(index);
            startAutoSlide(); // Restart auto-slide
        });
    });

    // Initialize
    startAutoSlide();
});
</script>
<?php require "includes/footer.php"; ?>