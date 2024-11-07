import Form from "next/form";
import Image from "next/image";
export default function ContactUs() {
  return (
    <section className="">
      <div className="flexCenter bg-[#F5F5F5]">
        <Image
          src="/contactUs-left.png"
          alt="product-1"
          height={100}
          width={354}
          className=""
        />
        <div className="contactUs-bg h-[80vh] w-[40rem]">
          <div className="p-20">
            <p className="regular-b-20">CONTACT US</p>
            <h1 className="bold-48 mb-14">Write A Message</h1>
            <Form action="" className="flex flex-col">
              <div className="flex gap-2 mx-2">
                <div className="flex-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="input-group-1"
                      className="bg-white  text-gray-900 text-sm rounded-lg 500 block w-full ps-10 p-2.5"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-white0 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="website-admin"
                      className="bg-white  text-gray-900 text-sm rounded-lg 500 block w-full ps-10 p-2.5"
                      placeholder="Name"
                    />
                  </div>
                </div>
              </div>
              <textarea
                className="bg-white  text-gray-900 text-sm rounded-lg 500 h-20 p-2.5 mx-2"
                placeholder="Your Message"
              />
              <button
                className="rounded-full border border-green-200 bg-green-1 px-4 py-1 text-white m-5 self-start"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
