import React from 'react';
import { MdPhone } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Checkbox, Divider, Form, Input, message } from "antd";


const CustomerQuote = () => {
  return (
    <div className="bg-white-500 w-full top-[60px]">
      <div className="w-full h-[150px] relative flex justify-center items-center">
        <img
          src="https://fastguardservice.com/wp-content/uploads/2024/01/fgs-header-jpg.webp"
          alt=""
          className="object-center w-full h-[150px]"
        />
        <p className="text-primary-color font-bold text-6xl absolute uppercase">
          QUOTE
        </p>
        </div>

        <div className="max-w-7xl my-12 mx-auto flex justify-center sm:px-0">
          <div className='inline-flex'>
            <div className="w-1/4 min-w-[300px] mx-4 mt-40">
              <div className="inline-flex w-full rounded-lg border-[1px] border-yellow-400">
                <div className="w-1/5 pl-1 text-[40px] text-global-color-primary flex justify-center items-center"><MdPhone /> </div>
                <div className='p-2 text-[17px]'>
                  <p className="font-bold">(844) XXX-XXXX</p>
                  We are open 24/7
                </div>
              </div>
              <div className="inline-flex mt-5 w-full rounded-lg border-[1px] border-yellow-400">
                <div className="w-1/5 pl-1 text-[40px] text-global-color-primary flex justify-center items-center"><FaFacebook /> </div>
                <div className='p-2 text-[17px]'>
                  <p className="font-bold">Fast Guard</p>
                  Contact us or check out our official social media posts
                </div>
              </div>
              <div className="inline-flex mt-5 w-full rounded-lg border-[1px] border-yellow-400">
                <div className="w-1/5 pl-1 text-[40px] text-global-color-primary flex justify-center items-center"><IoIosMail /> </div>
                <div className='p-2 text-[17px]'>
                  <p className="font-bold">ABC@fastguardvservice.com</p>
                  For any question regarding our security services, please email us
                </div>
              </div>
              <div className="inline-flex mt-5 w-full rounded-lg border-[1px] border-yellow-400">
                <div className="w-1/5 pl-1 text-[40px] text-global-color-primary flex justify-center items-center"><FaLocationDot /> </div>
                <div className='p-2 text-[17px]'>
                  <p className="font-bold">Main Office</p>
                  10xx West Lakes Drive Suite xxx and xxx, West Covina, CA 91790
                </div>
              </div>
            </div>

            <div className='w-full p-4 mx-3 rounded-xl text-[17px] border-[1px] border-neutral-300'>
              <form className="gap-4">
                {/* Row 1 */}
                <div className='flex'> 
                  <div className='w-1/2 mx-2'>
                    <label htmlFor="companyName" className="block font-medium text-gray-700">
                      Company Name?
                    </label>
                    <input
                      type="text"
                      id="companyName"   

                      name="companyName"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   
                    />
                  </div>
              
                  <div className='w-1/2 mx-2'>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                      Email?<span className='text-red-500 ml-1'>*</span> 
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className='mt-5 flex'> 
                  <div className='w-1/2 mx-2'>
                    <label htmlFor="firstName" className="block font-medium text-gray-700">
                      First Name?<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                  />
                  </div>

                  <div className='w-1/2 mx-2'>                 
                    <label htmlFor="lastName" className="block font-medium text-gray-700">
                      Last Name?<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className='mt-5 mx-2'>
                  <label htmlFor="phone" className="block font-medium text-gray-700">
                      Phone?<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />              
                </div>  

                {/* Row 4 */}
                <div className='mt-5 mx-2 w-full'>
                  <label className="block font-medium text-gray-700">
                      Type Of Security Needed?<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="checkbox"
                        id="personalSecurity"
                        name="securityType"
                        value="personal"
                        aria-label="Security Guards"
                        className="mr-2 cursor-pointer"
                        required
                      />
                      <label htmlFor="personalSecurity" className='cursor-pointer font-medium mr-8'>Personal Security</label>

                      <input
                        type="checkbox"
                        id="corporateSecurity"
                        name="securityType"
                        value="corporate"
                        className="mr-2 cursor-pointer"
                      />
                      <label htmlFor="corporateSecurity" className='cursor-pointer font-medium'>Corporate Security</label>
                      <br></br>
                      <input
                        type="checkbox"
                        id="eventSecurity"
                        name="securityType"
                        value="event"
                        className="mr-2 cursor-pointer"
                      />
                      <label htmlFor="eventSecurity" className='cursor-pointer font-medium mr-[55px]'>Event Security</label>

                      <input
                        type="checkbox"
                        id="aviationSecurity"
                        name="securityType"
                        value="aviation"
                        className="mr-2 cursor-pointer"
                      />
                      <label htmlFor="aviationSecurity" className='cursor-pointer font-medium'>Aviation Security</label>
                    </div>                
                </div>

                {/* Row 5 */}
                <div className='mt-5 mx-2'>
                  <label htmlFor="location" className="block font-medium text-gray-700">
                      Location?<span className='text-red-500 ml-1'>*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />              
                </div>  

                {/* Row 6 */}
                <div className='mt-5 flex'> 
                  <div className='w-1/3 mx-2'>
                    <label htmlFor="numbers" className="block font-medium text-gray-700">
                      Numbers?<span className='text-red-500 ml-1'>*</span> 
                    </label>
                    <input
                      type="number"
                      id="numbers"
                      name="numbers"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"  

                      required
                    />
                  </div>
              
                  <div className='w-1/3 mx-2'>
                    <label htmlFor="startDate" className="block font-medium text-gray-700">
                    Start Date?<span className='text-red-500 ml-1'>*</span> 
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />
                  </div>

                  <div className='w-1/3 mx-2'>
                    <label htmlFor="endDate" className="block font-medium text-gray-700">
                    End Date?<span className='text-red-500 ml-1'>*</span> 
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"   

                      required
                    />
                  </div>
                </div>

                {/* Row 7 */}
                <div className='mt-5 mx-2'>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                      Comments:
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows="8"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    ></textarea>                             
                </div>  

                  <p className="mt-5 mx-2 text-[16px]">
                      <strong>Note:</strong> <br/> <small className="text-red-500">Due to heightened demand, holiday service prices will be higher!!!</small>
                    </p>

                <div className=" flex justify-center">
                  <button
                    type="submit"
                    className="mt-5 w-20 items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"   
                  >
                    Send
                  </button>   
                </div>  
              </form>
            </div>
          </div>
        </div> 
        <div>
      </div>        
    </div>  
  )
}

export default CustomerQuote