"use client"
import { Formik, Form, Field } from "formik"; 

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

        <div className="">
          <section className="">
            <Formik
              initialValues={{ name: "", phone: "", email: "", message: "" }}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border border-gray-200 rounded-md"
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border border-gray-200 rounded-md"
                  />
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    className="border border-gray-200 rounded-md"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="border border-gray-200 rounded-md"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </section>
          <section> 
          </section>
        </div>
      </main>
    </div>
  );
};

export default page;
