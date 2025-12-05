import React, { useState } from "react";
import { db } from "../../firebasedb";
import { collection, addDoc } from "firebase/firestore";

const chips = ["Booking", "General", "Quotatuion", "Corporate", "Others"];
import heroUrl from "../assets/about-2.jpg";

export default function ContactPage({ }) {
  const [activeChip, setActiveChip] = useState("General");
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen  text-gray-800">
      {/* Hero section */}
      <section id="contact" className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="relative grid grid-cols-1 md:gap-6 md:grid-cols-3">

          <div className=" mb-10 md:mb-0 relative col-span-2 overflow-hidden rounded-2xl">
            <img
              src="https://moonwalkinfra.com/wp-content/uploads/2024/07/Fabricating.jpg"
              alt="Office / Resort visual"
              className="md:absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/60 to-transparent" />
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-center p-4 sm:p-8 text-white">
              <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                You Have Questions,
                <br /> We Have Answers
              </h1>
              <p className="mt-2 text-sm text-white/80 sm:mt-3 sm:text-base">
                Discover experiences you won’t find anywhere else — thoughtfully
                designed to immerse you in the heart of the destination.
              </p>

              {/* Info blocks */}
              <div className="mt-6 grid w-full gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-3 sm:p-4 ring-1 ring-white/20">
                  <h4 className="font-semibold">Location</h4>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">
                    Jagdev Engineering Works Pvt. Ltd.
                    <br />
                    1/844 Vardan Khand, Sector-1
                    <br />
                    Gomti Nagar Extension, U.P 226010, India
                    <br />
                    Mon–Fri | 09:00–18:00
                  </p>
                </div>


                {/* ...other info blocks */}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200 sm:p-6">
            <h3 className="text-base font-semibold sm:text-lg">
              Tell Us What You Need
            </h3>
            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
              Our team is ready to assist you with every detail, big or small.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                  fullName: `${formData.get("firstName")} ${formData.get("lastName")}`,
                  email: formData.get("email"),
                  phone: formData.get("phone"),
                  country: formData.get("country"),
                  message: formData.get("message"),
                  inquiryType: activeChip,
                  agree: agree,
                  date: new Date().toISOString(),
                  status: "New",
                };

                try {
                  await addDoc(collection(db, "consultations"), data);
                  alert("Thanks! We'll get back to you soon.");
                  e.target.reset();
                  setActiveChip("General");
                  setAgree(false);
                } catch (error) {
                  console.error("Error submitting form: ", error);
                  alert("Something went wrong. Please try again.");
                }
              }}
              className="mt-4 space-y-3 sm:mt-6 sm:space-y-4"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Input name="firstName" placeholder="First Name" required />
                <Input name="lastName" placeholder="Last Name" required />
                <Input name="country" placeholder="Country" />
                <Input name="phone" placeholder="Phone Number" required />
                <div className="sm:col-span-2">
                  <Input name="email" type="email" placeholder="Email Address" required />
                </div>
              </div>

              {/* Chips */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Type of Inquiry
                </label>
                <div className="flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <button
                      type="button"
                      key={c}
                      onClick={() => setActiveChip(c)}
                      className={
                        "rounded-full border px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm transition " +
                        (activeChip === c
                          ? "border-orange-400 bg-orange-50 text-orange-400"
                          : "border-gray-300 bg-white hover:border-gray-400")
                      }
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <Textarea name="message" placeholder="Message" rows={4} required />

              <label className="flex items-start gap-2 text-xs sm:text-sm">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                <span>I’d like to receive exclusive offers and updates.</span>
              </label>

              <button
                disabled={!agree}
                className="w-full rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-3"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        id="map"
        className="mx-auto mt-8 max-w-7xl px-4 sm:mt-12 sm:px-6"
      >
        <div className="overflow-hidden rounded-2xl shadow ring-1 ring-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.0244678044703!2d81.00402985628789!3d26.838395807765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b392eefb69%3A0x42b82060e5a9eb23!2sJagdev%20Engineering%20Works%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749225370229!5m2!1sen!2sin " className='w-full' height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-orange-400 sm:mb-8 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          <Faq
            q="How soon can I expect a reply?"
            a="We usually respond within 1–2 business days."
          />
          <Faq
            q="Can I schedule a meeting in person?"
            a="Absolutely! Just drop a message with your availability and preferred location."
          />
          <Faq
            q="Where are you located?"
            a="Our head office is in Lucknow, with regional offices across Lucknow."
          />
        </div>
      </section>

      {/* Team */}
      <section
        id="team"
        className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-20"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-orange-400 sm:mb-10 sm:text-3xl">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Er. Pradeep Kumar",
              role: "Purchase Head",
              phone: "+91-9264928486",

            },
            {
              name: "Mrs. Pragya Kumari",
              role: "Sales Executive",
              phone: "+91-9455277443",

            },
            {
              name: "Mrs. Tusha Sharma",
              role: "HR Department",
              phone: "+91-9450766113",

            },
          ].map((p) => (
            <article
              key={p.email}
              className="group rounded-2xl bg-white p-4 shadow ring-1 ring-gray-200 transition hover:shadow-lg sm:p-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-orange-500/10 ring-1 ring-orange-500/30" />
                <div>
                  <h3 className="text-base font-semibold group-hover:text-orange-600 sm:text-lg">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-600 sm:text-sm">{p.role}</p>
                  <p className="mt-1 text-xs sm:mt-2 sm:text-sm">
                    📞 {p.phone}
                  </p>
                  <p className="text-xs sm:text-sm"> {p.email}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Social footer */}
      <footer className="bg-gray-100 py-8 text-center sm:py-10">
        <h3 className="text-base font-semibold sm:text-lg">Connect with us</h3>
        <div className="mt-3 flex justify-center gap-4 text-xs sm:gap-6 sm:text-sm">
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Facebook
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            Instagram
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Reusable UI ---------- */
function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base " +
        className
      }
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 sm:px-4 sm:py-3 sm:text-base " +
        className
      }
    />
  );
}

function Faq({ q, a }) {
  return (
    <details className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm open:shadow sm:p-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4">
        <h3 className="text-sm font-semibold sm:text-base">{q}</h3>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition group-open:rotate-45 sm:h-7 sm:w-7">
          +
        </span>
      </summary>
      <p className="mt-2 text-xs text-gray-600 sm:mt-3 sm:text-sm">{a}</p>
    </details>
  );
}
