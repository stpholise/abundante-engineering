import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Image from "next/image";
import { SetStateAction } from "react";
import * as Yup from "yup";

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

const RequestForm = ({
  title,
  setOpenRequestForm,
}: {
  title: string;
  setOpenRequestForm: React.Dispatch<SetStateAction<boolean>>;
}) => {
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

      setOpenRequestForm(false)
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <div className="fixed text-[#262626] top-0 left-0 right-0 bottom-0 lg:top-3 lg:bottom-1/2 lg:left-1/2 lg:right-1/2 lg:-translate-x-1/2  w-full rounded-lg px-4 py-4 lg:px-6 lg:py-6 max-w-xl z-80  lg:w-[560px] lg:h-[96vh] bg-white shadow-xl">
        <p className="mb-3">{title}</p>
        <button
          onClick={() => setOpenRequestForm(false)}
          className="close absolute top-6 right-6 bg-transparent w-5 h-5 cursor-pointer"
        >
          <Image src={"/icons/close.svg"} alt="close" width={16} height={16} />
        </button>
        <div className="rounded-lg text-xs overflow-y-auto scrollbar-hide h-full  p-2">
          <Formik
            onSubmit={submitRequest}
            initialValues={initialValues}
            validationSchema={validationSchima}
          >
            {() => (
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
                <button className="mt-auto   py-2 w-full bg-red-500 h-8 rounded-lg text-xs font-semibold text-white">
                  Submit Request
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div
        onClick={() => setOpenRequestForm(false)}
        className="z-50 fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.2)]"
      ></div>
    </>
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

export default RequestForm;
