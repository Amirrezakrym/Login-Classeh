"use client";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useFormState, useFormStatus } from "react-dom";
import { LoginRegister } from "@/app/login/action";
import TickIcon from "../components/icons/TickIcon";
import XIcon from "../components/icons/XIcon";
import DotIcon from "../components/icons/DotIcon";
import InfoIcon from "./icons/InfoIcon";


const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const handleInputChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  const keyDownHandler = (e: any) => {
    if (e.key === "Enter" && phoneNumber.length < 11) {
      e.preventDefault();

      toast.custom((t) => <Toast message={message || "عزیزم لطفا شمارتو وارد کن"} icon={<InfoIcon />} />);
    }
  };
 
  return (
    <section className='h-dvh w-full mx-auto bg-[#FFBF09]'>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
      <div className='flex flex-col justify-end mx-auto h-dvh relative  max-w-md'>
        <div className='bg-zarafe bg-no-repeat absolute w-full h-[70%] top-0 z-[1] bg-contain bg-top'></div>

        <div className='bg-back-pattern px-6 z-10 h-1/2 bg-no-repeat bg-cover'>
          <div className='flex flex-col w-full mt-12'>
            <div>
              <DotIcon />
            </div>
            <p className='mt-4 mb-2 font-w900'>سلام به رو ماهت نازنین</p>
            <p className='font-w600 text-[#3D3018]'>عـزیـزم شـمـاره تـلفنت رو وارد کــــــن!</p>
          </div>

          {/* Form */}
          <form className='w-full' action={formAction} onKeyDown={keyDownHandler}>
            <input
              type='tel'
              name='number'
              placeholder='محل ورود شماره تلفن'
              value={phoneNumber}
              onChange={handleInputChange}
              className='bg-clip-text w-full font-w600 text-s14 my-5 p-3 bg-transparent border-b outline-none border-gray-300 text-center'
            />

            <SubmitButton phoneNumber={phoneNumber}/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

function SubmitButton({ phoneNumber }: any) {
    const { pending } = useFormStatus();
    return (
        <button
        type='submit'
        disabled={pending}
        className={`rounded-2xl font-w700 text-s14 block text-white mx-auto px-14 py-3 mb-3 transition-all duration-500 ${
          pending
            ? "bg-[#cc5d13] cursor-not-allowed" 
            : "bg-[#FD6909]"
        } ${phoneNumber.length === 11 ? "opacity-1 visible" : "opacity-0 invisible"}`}
      >
        {pending ? "در حال ارسال..." : "ادامه"} 
      </button>
    );
  }