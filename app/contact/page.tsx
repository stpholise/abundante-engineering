"use client";
import { Formik, Form, Field } from "formik";
import MapEmbed from "../_components/utils/MapEmbed";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen text-black dark:text-white   ">
      <main className="container mx-auto px-4 lg:px-16 py-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-red-500 text-3xl font-bold text-center">
            Contact
          </h1>
          <p className="max-w-3xl text-center text-[#717182]">
            Get in touch with our team for any questions or project inquiries
          </p>
        </div>

        <div className="lg:grid grid-cols-[8fr_4fr] gap-6 py-10">
          <section className={""}>
            <Formik
              initialValues={{ name: "", phone: "", email: "", message: "" }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="border border-gray-200 flex flex-col rounded-lg px-6 py-6 gap-4 max-w-xl mx-auto">
                  <div className="">
                    <label
                      htmlFor="fullName"
                      className="text-[#262626] dark:text-[#eaeaea] text-xs font-medium"
                    >
                      {" "}
                      Full Name *
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100  dark:bg-[#0a0a0a]"
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="phone"
                      className="text-[#262626] dark:text-[#eaeaea]  text-xs font-medium"
                    >
                      {" "}
                      Phone *
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Phone"
                      className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100 dark:bg-[#0a0a0a] "
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="email"
                      className="text-[#262626] dark:text-[#eaeaea]  text-xs font-medium"
                    >
                      {" "}
                      Email *
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100 dark:bg-[#0a0a0a] "
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="message"
                      className="text-[#262626] dark:text-[#eaeaea]  text-xs font-medium"
                    >
                      {" "}
                      Message *
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      className="border border-gray-200 rounded-md w-full py-2 px-2 text-sm bg-gray-100  dark:bg-[#0a0a0a]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="border border-gray-200 rounded-md bg-red-600 py-2 text-xs font-semibold  text-white"
                  >
                    Submit Message
                  </button>
                </Form>
              )}
            </Formik>
          </section>
          <section className="flex flex-col gap-5 justify-center max-w-xl mx-auto mb-6">
            <div className="max-w-xl w-full border-gray-200 border rounded-lg mx-auto">
              <MapEmbed />
            </div>
            <div className="border border-gray-200 rounded-lg px-6 py-6 text-sm flex flex-col gap-2">
              <h4 className="mb-4 flex gap-1">
                <Image
                  src={"/icons/phone-red.svg"}
                  alt="phone "
                  width={16}
                  height={16}
                />
                phone
              </h4>
              <div className="flex flex-col">
                <span className="text-red-400">+251 9 32 22 2777</span>
                <span className="text-[11px] text-[#6f6f6f]">Main Line</span>
              </div>
              <div className="flex flex-col">
                <span className="text-red-400">+251 9 32 22 2777</span>
                <span className="text-[11px] text-[#6f6f6f]">Sales</span>
              </div>
              <div className="flex flex-col">
                <span className="text-red-400">+251 9 32 22 2777</span>
                <span className="text-[11px] text-[#6f6f6f]">Support</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg px-6 py-6 text-sm flex flex-col gap-2">
              <h4 className="mb-4 flex gap-1">
                <Image
                  src={"/icons/mail-red.svg"}
                  alt="mail "
                  width={16}
                  height={16}
                />
                Email
              </h4>
              <span className=" text-red-400">abundantplc@gmail.com</span>
            </div>
            <div className="border border-gray-200 rounded-lg px-6 py-6 text-sm flex flex-col gap-2">
              <h4 className="mb-4 flex gap-1">
                <Image
                  src={"/icons/clock-red.svg"}
                  alt="clock "
                  width={16}
                  height={16}
                />
                Business Hours
              </h4>
              <div className="flex justify-between">
                <span className="">Monday - Friday</span>
                <span className="">8:00 AM - 6:00 Pm</span>
              </div>
              <div className="flex justify-between">
                <span className="">Saturday</span>
                <span className="">9:00 AM - 4:00 Pm</span>
              </div>
              <div className="flex justify-between">
                <span className="">Emergency Service</span>
                <span className=" text-red-400">24/7</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default page;
