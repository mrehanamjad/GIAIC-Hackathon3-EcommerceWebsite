import Container from "@/components/Container";
import DeliveryServices from "@/components/DeliveryServices";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function ContactPage() {
  return (
    <div className="w-full">
      <PageHero name="Contact" />
      <Container className="px-4 my-10">
        <div className="text-center max-w-[40rem] mx-auto my-20 px-4">
          <h1 className="text-4xl font-semibold mb-4 max-sm:text-3xl">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] max-sm:text-md">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex justify-evenly gap-6 my-20 max-md:flex-col max-md:items-center max-md:px-4 max-sm:space-y-9">
          <div className="md:space-y-8  max-md:flex max-md:justify-center max-sm:items-start max-sm: max-sm:gap-6 max-sm:flex-col  max-md:gap-4 max-[500px]:flex-col max-[500px]:max-w-60 max-[500px]:mx-auto">
            <div className="flex justify-between gap-6">
              <span>
                <svg
                  width="22"
                  height="29"
                  viewBox="0 0 22 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 0C8.08369 0.00346197 5.28779 1.17074 3.22564 3.24579C1.16348 5.32083 0.00345217 8.1342 1.17029e-05 11.0688C-0.00348119 13.4669 0.774992 15.7999 2.21601 17.71C2.21601 17.71 2.51601 18.1075 2.56501 18.1648L11 28.175L19.439 18.1598C19.483 18.1065 19.784 17.71 19.784 17.71L19.785 17.707C21.2253 15.7977 22.0034 13.4658 22 11.0688C21.9966 8.1342 20.8365 5.32083 18.7744 3.24579C16.7122 1.17074 13.9163 0.00346197 11 0ZM11 15.0938C10.2089 15.0938 9.43553 14.8577 8.77773 14.4154C8.11993 13.9731 7.60724 13.3445 7.30449 12.6091C7.00174 11.8736 6.92253 11.0643 7.07687 10.2835C7.23121 9.50274 7.61217 8.78555 8.17158 8.22264C8.73099 7.65974 9.44373 7.27639 10.2197 7.12109C10.9956 6.96578 11.7998 7.04549 12.5307 7.35013C13.2616 7.65478 13.8864 8.17067 14.3259 8.83258C14.7654 9.49449 15 10.2727 15 11.0688C14.9987 12.1358 14.5768 13.1588 13.827 13.9134C13.0771 14.6679 12.0605 15.0924 11 15.0938Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className=" sm:max-w-48  text-black/90 space-y-2">
                <h3 className="font-medium text-3xl">Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </span>
            </div>
            <div className="flex gap-4">
              <span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6091 21.425L20.5279 16.805C20.2877 16.5867 19.972 16.4703 19.6476 16.4803C19.3232 16.4903 19.0154 16.626 18.7891 16.8587L15.7979 19.935C15.0779 19.7975 13.6304 19.3462 12.1404 17.86C10.6504 16.3687 10.1991 14.9175 10.0654 14.2025L13.1391 11.21C13.3721 10.9839 13.508 10.676 13.5181 10.3515C13.5281 10.027 13.4115 9.71129 13.1929 9.47124L8.5741 4.39124C8.35541 4.15044 8.05145 4.00437 7.72679 3.98407C7.40214 3.96376 7.08235 4.07082 6.83535 4.28249L4.12285 6.60874C3.90674 6.82564 3.77775 7.11431 3.76035 7.41999C3.7416 7.73249 3.3841 15.135 9.1241 20.8775C14.1316 25.8837 20.4041 26.25 22.1316 26.25C22.3841 26.25 22.5391 26.2425 22.5804 26.24C22.886 26.2229 23.1745 26.0933 23.3904 25.8762L25.7154 23.1625C25.9279 22.9163 26.0357 22.5968 26.0159 22.2721C25.996 21.9475 25.85 21.6435 25.6091 21.425Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className=" sm:max-w-48 text-black/90 space-y-2">
                <h3 className="font-medium text-3xl">Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </span>
            </div>
            <div className="flex justify-between gap-6">
              <span id="clock-icon">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_247)">
                    <path
                      d="M23 11.5C23 14.55 21.7884 17.4751 19.6317 19.6317C17.4751 21.7884 14.55 23 11.5 23C8.45001 23 5.52494 21.7884 3.36827 19.6317C1.2116 17.4751 0 14.55 0 11.5C0 8.45001 1.2116 5.52494 3.36827 3.36827C5.52494 1.2116 8.45001 0 11.5 0C14.55 0 17.4751 1.2116 19.6317 3.36827C21.7884 5.52494 23 8.45001 23 11.5ZM11.5 5.03125C11.5 4.84063 11.4243 4.65781 11.2895 4.52302C11.1547 4.38823 10.9719 4.3125 10.7812 4.3125C10.5906 4.3125 10.4078 4.38823 10.273 4.52302C10.1382 4.65781 10.0625 4.84063 10.0625 5.03125V12.9375C10.0625 13.0642 10.0961 13.1886 10.1597 13.2982C10.2233 13.4077 10.3147 13.4985 10.4247 13.5614L15.456 16.4364C15.6211 16.5256 15.8146 16.5467 15.995 16.4952C16.1755 16.4437 16.3287 16.3236 16.4218 16.1607C16.5149 15.9977 16.5406 15.8048 16.4933 15.6232C16.4461 15.4415 16.3297 15.2856 16.169 15.1886L11.5 12.5206V5.03125Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_247">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className=" sm:max-w-48 text-black/90 space-y-2">
                <h3 className="font-medium text-3xl">Address</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </span>
            </div>
          </div>
          <div className="space-y-8 max-md:w-full max-md:max-w-[30rem]">
            <Input
              label="Your name"
              placeholder="Abc"
              className="w-[30rem] py-8 px-4 placeholder:text-[#9F9F9F] max-md:w-full max-sm:py-4"
            />
            <Input
              label="Email address"
              placeholder="abc@def.com"
              className="w-[30rem] py-8 px-4 placeholder:text-[#9F9F9F] max-md:w-full max-sm:py-4"
            />
            <Input
              label="Subject"
              placeholder="This is optional"
              className="w-[30rem] py-8 px-4 placeholder:text-[#9F9F9F] max-md:w-full max-sm:py-4"
            />
            <Textarea
              label="Message"
              placeholder="Hi! i'd like to ask about"
              className="w-[30rem] h-28 py-4 px-4 placeholder:text-[#9F9F9F] max-md:w-full max-sm:h-20"
            />
            <Button
              variant={"fBtn2"}
              size={"f2"}
              className="px-20 max-sm:w-full max-sm:px-0"
            >
              Submit
            </Button>
          </div>
        </div>
      </Container>
      <DeliveryServices />
    </div>
  );
}

export default ContactPage;
