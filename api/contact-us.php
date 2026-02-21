<?php require "includes/header.php"; ?>
<main>
    <div class="min-h-screen  text-gray-800">
        <section id="contact" class="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
            <div class="relative grid grid-cols-1 md:gap-6 md:grid-cols-3">
                <div class=" mb-10 md:mb-0 relative col-span-2 overflow-hidden rounded-2xl"><img
                        alt="Office / Resort visual" class="md:absolute inset-0 h-full w-full object-cover"
                        src="assets//Fabricating.jpg">
                    <div class="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/60 to-transparent">
                    </div>
                    <div
                        class="pointer-events-none absolute inset-0 flex flex-col justify-center p-4 sm:p-8 text-white">
                        <h1 class="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">You Have
                            Questions,<br> We Have Answers</h1>
                        <p class="mt-2 text-sm text-white/80 sm:mt-3 sm:text-base">Discover experiences you
                            won’t find anywhere else — thoughtfully designed to immerse you in the heart of the
                            destination.</p>
                        <div class="mt-6 grid w-full gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="rounded-xl bg-white/10 p-3 sm:p-4 ring-1 ring-white/20">
                                <h4 class="font-semibold">Location</h4>
                                <p class="mt-1 text-xs text-white/80 sm:text-sm">Jagdev Engineering Works Pvt.
                                    Ltd.<br>1/844 Vardan Khand, Sector-1<br>Gomti Nagar Extension, U.P 226010,
                                    India<br>Mon–Fri | 09:00–18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200 sm:p-6">
                    <h3 class="text-base font-semibold sm:text-lg">Tell Us What You Need</h3>
                    <p class="mt-1 text-xs text-gray-600 sm:text-sm">Our team is ready to assist you with every
                        detail, big or small.</p>
                    <form class="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2"><input placeholder="First Name" required=""
                                class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "
                                name="firstName"><input placeholder="Last Name" required=""
                                class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "
                                name="lastName"><input placeholder="Country"
                                class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "
                                name="country"><input placeholder="Phone Number" required=""
                                class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "
                                name="phone">
                            <div class="sm:col-span-2"><input placeholder="Email Address" required=""
                                    class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "
                                    type="email" name="email"></div>
                        </div>
                        <div><label class="mb-2 block text-sm font-medium text-gray-700">Type of Inquiry</label>
                            <div class="flex flex-wrap gap-2"><button type="button"
                                    class="rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition border-gray-300 bg-white hover:border-gray-400">Booking</button><button
                                    type="button"
                                    class="rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition border-orange-400 bg-orange-50 text-orange-400">General</button><button
                                    type="button"
                                    class="rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition border-gray-300 bg-white hover:border-gray-400">Quotatuion</button><button
                                    type="button"
                                    class="rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition border-gray-300 bg-white hover:border-gray-400">Corporate</button><button
                                    type="button"
                                    class="rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition border-gray-300 bg-white hover:border-gray-400">Others</button>
                            </div>
                        </div><textarea name="message" placeholder="Message" rows="4" required=""
                            class="w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base "></textarea><label
                            class="flex items-start gap-2 text-xs sm:text-sm"><input
                                class="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                                type="checkbox"><span>I’d like to receive exclusive offers and
                                updates.</span></label><button disabled=""
                            class="w-full rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-3">Submit</button>
                    </form>
                </div>
            </div>
        </section>
        <section id="map" class="mx-auto mt-8 max-w-7xl px-4 sm:mt-12 sm:px-6">
            <div class="overflow-hidden rounded-2xl shadow ring-1 ring-gray-200"><iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.0244678044703!2d81.00402985628789!3d26.838395807765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b392eefb69%3A0x42b82060e5a9eb23!2sJagdev%20Engineering%20Works%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749225370229!5m2!1sen!2sin "
                    class="w-full" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section id="faq" class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 class="mb-6 text-center text-2xl font-bold text-orange-400 sm:mb-8 sm:text-3xl">Frequently Asked
                Questions</h2>
            <div class="space-y-3 sm:space-y-4">
                <details class="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm open:shadow sm:p-5">
                    <summary class="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4">
                        <h3 class="text-sm font-semibold sm:text-base">How soon can I expect a reply?</h3><span
                            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition group-open:rotate-45 sm:h-7 sm:w-7">+</span>
                    </summary>
                    <p class="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">We usually respond within 1–2
                        business days.</p>
                </details>
                <details class="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm open:shadow sm:p-5">
                    <summary class="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4">
                        <h3 class="text-sm font-semibold sm:text-base">Can I schedule a meeting in person?</h3>
                        <span
                            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition group-open:rotate-45 sm:h-7 sm:w-7">+</span>
                    </summary>
                    <p class="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">Absolutely! Just drop a message
                        with your availability and preferred location.</p>
                </details>
                <details class="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm open:shadow sm:p-5">
                    <summary class="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4">
                        <h3 class="text-sm font-semibold sm:text-base">Where are you located?</h3><span
                            class="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition group-open:rotate-45 sm:h-7 sm:w-7">+</span>
                    </summary>
                    <p class="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">Our head office is in Lucknow, with
                        regional offices across Lucknow.</p>
                </details>
            </div>
        </section>
        <section id="team" class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20">
            <h2 class="mb-6 text-center text-2xl font-bold text-orange-400 sm:mb-10 sm:text-3xl">Meet Our Team
            </h2>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <article
                    class="group rounded-2xl bg-white p-4 shadow ring-1 ring-gray-200 transition hover:shadow-lg sm:p-6">
                    <div class="flex items-start gap-3 sm:gap-4">
                        <div
                            class="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30">
                        </div>
                        <div>
                            <h3 class="text-base font-semibold group-hover:text-orange-600 sm:text-lg">Er.
                                Pradeep Kumar</h3>
                            <p class="text-xs text-gray-600 sm:text-sm">Purchase Head</p>
                            <p class="mt-1 text-xs sm:mt-2 sm:text-sm">📞 +91-9264928486</p>
                            <p class="text-xs sm:text-sm"> </p>
                        </div>
                    </div>
                </article>
                <article
                    class="group rounded-2xl bg-white p-4 shadow ring-1 ring-gray-200 transition hover:shadow-lg sm:p-6">
                    <div class="flex items-start gap-3 sm:gap-4">
                        <div
                            class="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30">
                        </div>
                        <div>
                            <h3 class="text-base font-semibold group-hover:text-orange-600 sm:text-lg">Mrs.
                                Pragya Kumari</h3>
                            <p class="text-xs text-gray-600 sm:text-sm">Sales Executive</p>
                            <p class="mt-1 text-xs sm:mt-2 sm:text-sm">📞 +91-9455277443</p>
                            <p class="text-xs sm:text-sm"> </p>
                        </div>
                    </div>
                </article>
                <article
                    class="group rounded-2xl bg-white p-4 shadow ring-1 ring-gray-200 transition hover:shadow-lg sm:p-6">
                    <div class="flex items-start gap-3 sm:gap-4">
                        <div
                            class="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30">
                        </div>
                        <div>
                            <h3 class="text-base font-semibold group-hover:text-orange-600 sm:text-lg">Mrs.
                                Tusha Sharma</h3>
                            <p class="text-xs text-gray-600 sm:text-sm">HR Department</p>
                            <p class="mt-1 text-xs sm:mt-2 sm:text-sm">📞 +91-9450766113</p>
                            <p class="text-xs sm:text-sm"> </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <footer class="bg-gray-100 py-8 text-center sm:py-10">
            <h3 class="text-base font-semibold sm:text-lg">Connect with us</h3>
            <div class="mt-3 flex justify-center gap-4 text-xs sm:gap-6 sm:text-sm"><a href="#"
                    class="text-gray-700 hover:text-orange-500">Facebook</a><a href="#"
                    class="text-gray-700 hover:text-orange-500">Instagram</a><a href="#"
                    class="text-gray-700 hover:text-orange-500">LinkedIn</a></div>
        </footer>
    </div>
</main>
<?php require "includes/footer.php"; ?>