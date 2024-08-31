"use client";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { LoginRegister } from "@/app/login/action";
import TickIcon from "../components/icons/TickIcon";
import XIcon from "../components/icons/XIcon";
import DotIcon from "../components/icons/DotIcon";
import InfoIcon from "./icons/InfoIcon";
import Link from "next/link";
import OtpInput from "react-otp-input";
const Confirm = () => {
  const [otp, setOtp] = useState<any>("");
  const [formState, formAction] = useFormState(LoginRegister, null);
  const message = formState?.zodErrors?.number;

  useEffect(() => {
    if (formState?.success) {
      toast.custom((t) => <Toast message='ثبت نام موفقیت آمیز بود!' icon={<TickIcon />} />);
    } else if (formState?.zodErrors) {
      toast.custom((t) => <Toast message={message || "خطایی رخ داد"} icon={<XIcon />} />);
    }
  }, [formState]);

  function Toast({ message, icon }: any) {
    return (
      <div className='rounded-xl bg-black/20 backdrop-blur-sm border border-white flex items-center'>
        {icon}
        <p className='text-white font-w600 text-s12 p-2 px-4 pl-8'>{message}</p>
      </div>
    );
  }

 
  return (
    <section className='h-dvh w-full mx-auto'>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
      <div className='flex flex-col justify-end mx-auto h-dvh relative bg-[#FFBF09] max-w-md'>
        <div className='bg-zarafe bg-no-repeat absolute w-full h-[70%] top-0 z-[1] bg-contain bg-top'></div>

        <div className='bg-back-pattern px-6 z-10 h-1/2 bg-no-repeat bg-cover'>
          <div className='flex w-full mt-12 justify-between items-end'>
            <div className='flex flex-col'>
              <div>
                <DotIcon />
              </div>
              <p className='mt-4 mb-2 font-w600 text-s13'>عزیزم کد ارسال شده به شمارۀ</p>
              <p className='font-w600 text-s13 text-[#3D3018]'>0938850592929 رو اینجا وارد کن!</p>
            </div>
            <div>
              <Link href={"/login"} className='font-w700 text-xs text-[#FD6909] underline underline-offset-4'>
                ویرایش شماره
              </Link>
            </div>
          </div>

          {/* Form */}
          <form className='w-full' action={formAction} >    
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              shouldAutoFocus={true}
              inputType="text"
              skipDefaultStyles={true}
              containerStyle='w-full justify-center my-5 text-black flex-row-reverse'
              inputStyle='w-12 h-12 mx-1 text-center font-w700 text-s14 bg-[#FD69091A] text-black border border-[#3D30181A] outline-none focus:border-[#FD6909] hover:border-[#FD6909] rounded-2xl'
              renderInput={(inputProps, index) => (
                <input
                  {...inputProps}
                  className={`w-12 h-12 mx-1 text-center bg-[#FD69091A] text-black border ${
                    otp[index] ? "border-[#FD6909]" : "border-[#3D30181A]"
                  } outline-none focus:border-[#FD6909] hover:border-[#FD6909] rounded-2xl`}
                />
              )}
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Confirm;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className={`rounded-2xl font-w700 text-s14 block text-white mx-auto px-14 py-3 mb-3 transition-all duration-500 ${
        pending ? "bg-[#cc5d13] cursor-not-allowed" : "bg-[#FD6909]"
      }`}
    >
      {pending ? "در حال ارسال..." : "ادامه"}
    </button>
  );
}
