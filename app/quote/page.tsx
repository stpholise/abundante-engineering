"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import clsx from "clsx";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { TrippleSpiner } from "@/app/_components/utils/Loading";

interface RequestType {
  name: string;
  phone: string;
  email: string;
  region: string;
  num_of_floors: number;
  type: string;
  image: string;
  building_type: string;
  num_of_units: number;
  address: string;
  extra: string;
}

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialValues: RequestType = {
    name: "",
    phone: "",
    email: "",
    region: "",
    num_of_floors: 1,
    type: "",
    image: "",
    building_type: "",
    num_of_units: 1,
    address: "",
    extra: "",
  };
  const validationSchima = Yup.object({
    name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Enter a valid email").required("Requiered"),
    region: Yup.string().required("Required"),
  });

  const submitRequest = async (values: RequestType) => {
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/stephenolise4@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: values.name,
          phone: values.phone,
          email: values.email,
          region: values.region,
          num_of_floors: values.num_of_floors.toString(),
          type: values.type,
          building_type: values.building_type,
          num_of_units: values.num_of_units.toString(),
          address: values.address,
          extra: values.extra,
        }),
      });
      toast.success("Submitted Successfully");
      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-10">
      <div className="px-4">
        <div className="mx-auto max-w-3xl mb-6">
          <h1 className="text-red-500 text-3xl font-bold text-center">
            Our Projects{" "}
          </h1>
          <p className="max-w-2xl text-center text-[#717182] mx-auto">
            Successful elevator installations and maintenance projects across
            Ethiopia. From residential buildings to major commercial complexes.
          </p>
        </div>
        <div className="static text-[#262626]  mx-auto  w-full rounded-lg px-4 py-4 lg:px-6 lg:py-6 max-w-3xl z-80  lg:w-[700px] border border-gray-200 bg-white shadow-xl">
          {loading && (
            <div className="absolute top-1/2 left-1/2 right-1/2 z-50">
              <TrippleSpiner />
            </div>
          )}

          <div className="rounded-lg text-xs overflow-y-auto scrollbar-hide h-full  p-2">
            <Formik
              onSubmit={submitRequest}
              initialValues={initialValues}
              validationSchema={validationSchima}
            >
              {({ isValid }) => (
                <Form className="flex flex-col gap-4 h-11/12 ">
                  <div className="lg:grid grid-cols-2 flex flex-col gap-4">
                    <div className="">
                      <label className="block">Name</label>
                      <Field
                        name="name"
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div>
                      <label className="block">Phone</label>
                      <Field
                        name="phone"
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* REGION */}
                    <div>
                      <label className="block">Region</label>
                      <Field
                        name="region"
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="region"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* FLOORS */}
                    <div>
                      <label className="block">Number of Floors</label>
                      <Field
                        name="num_of_floors"
                        type="number"
                        min={1}
                        className="border border-gray-200 bg-gray-100 p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="num_of_floors"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* BUILDING TYPE */}
                    <div>
                      <label className="block">Building Type</label>
                      <Field
                        as="select"
                        name="building_type"
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      >
                        {buildingTypeValues.map((item, index) => (
                          <option
                            key={index + item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="building_type"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    {/* NUMBER OF UNITS */}
                    <div>
                      <label className="block">Number of Units</label>
                      <Field
                        name="num_of_units"
                        type="number"
                        min={1}
                        className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                      />
                      <ErrorMessage
                        name="num_of_units"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="block">Address</label>
                    <Field
                      name="address"
                      className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* EXTRA */}
                  <div>
                    <label className="block">Extra Information</label>
                    <Field
                      as="textarea"
                      name="extra"
                      className="border border-gray-200 bg-gray-100  p-2 w-full rounded outline-none"
                    />
                    <ErrorMessage
                      name="extra"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <button
                    className={clsx(
                      "mt-auto   py-2 w-full  h-8 rounded-lg text-xs font-semibold text-white",
                      isValid ? "bg-red-500" : "bg-red-300"
                    )}
                  >
                    Submit Request
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

const buildingTypeValues: string[] = [
  "Residetial",
  "Commercial",
  "Government",
  "Huspitality",
  "Healthcare",
  "Industral",
  "Education",
];

export default Page;
