import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z.string(),
});
const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="">
      <div
        className={`h-[500px] relative w-full bg-no-repeat bg-cover bg-center`}
        style={{
          backgroundImage: `url(https://fastguardservice.com/wp-content/uploads/2024/06/IMG_4607.jpg)`,
        }}
      >
        <div className="bg-black/50 w-full h-full absolute top-0 px-[10%]">
          <div className="flex gap-4">
            <div className="basis-[70%] ">
              <div className="flex mt-20 items-center justify-center flex-col">
                <h1 className="text-white text-4xl">Security Guard Services</h1>
                <h2 className="bg-primary-color text-5xl px-2 py-1 rounded-sm my-4">
                  FAST GUARD SERVICE
                </h2>
                <h1 className="text-primary-color text-4xl">
                  Security Guard Company
                </h1>
                <p className="text-white text-lg mt-4">
                  Fast Guard Service A national Security Guard Company offering
                  top-tier security solutions Nationwide, including armed and
                  unarmed guards, event security, fire watch, and High-Risk
                  Employee Termination. Our highly trained professionals ensure
                  safety and peace of mind for businesses, events, and
                  residential communities. Contact us today for customized
                  protection plans tailored to your specific needs.
                </p>
              </div>
            </div>
            <div className="basis-[30%]">
              <div className="px-2 mt-10 py-2 rounded-lg shadow-yellow bg-black/40">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-1"
                >
                  <div>
                    <input
                      id="firstName"
                      placeholder="First Name"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="lastName"
                      placeholder="Last Name"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="email"
                      placeholder="Email"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      id="phoneNumber"
                      placeholder="Phone Number"
                      className="text-sm font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <textarea
                      id="message"
                      placeholder="Message"
                      className="text-sm mt-1 font-medium px-2 py-2 outline-none rounded-md w-full"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 font-medium">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="text-black w-full text-xl bg-primary-color px-4 py-2 rounded-md text-center my-4"
                    >
                      GET A QUOTATION
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
