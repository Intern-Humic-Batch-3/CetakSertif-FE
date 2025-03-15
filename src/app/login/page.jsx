"use client";

import Image from "next/image";
import { Label } from "flowbite-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Gambar dan Header Mobile */}
      <div className="md:hidden bg-brand-primary text-white flex flex-col items-center justify-center py-14 px-10">
        <h5 className="text-lg font-bold text-center mb-10 leading-tight">
          Website Cetak Sertifikat - HUMIC ENGINEERING
        </h5>
        <Image
          src="/assets/logos/login-logo.png"
          width={200}
          height={200}
          alt="Login Logo"
          priority
          className="my-8"
        />
        <h6 className="text-lg font-semibold text-center mb-3">
          Selamat Datang!
        </h6>
        <p className="text-center text-body-md text-white/80">
          Masuk untuk melakukan cetak sertifikat sesuai dengan kebutuhan anda
        </p>
      </div>

      {/* Form Login */}
      <div className="bg-white w-full md:w-[56vw] flex items-center justify-center text-black px-8 md:px-12 mt-10 md:mt-0">
        <div className="w-full max-w-[400px] md:max-w-[500px]">
          <h5 className="hidden md:flex absolute top-10 left-6 lg:left-11 xl:left-20 text-md lg:text-xl xl:text-2xl font-bold whitespace-nowrap">
            Website Cetak Sertifikat -
            <span className="text-brand-primary"> HUMIC ENGINEERING</span>
          </h5>

          <h2 className="hidden md:block text-h2 text-black font-semibold mb-12 text-center md:mb-16">
            Login
          </h2>

          <form className="flex flex-col mt-5 xl:mt-0">
            <div>
              <Label
                htmlFor="email"
                value="Email"
                className="mb-2 block font-semibold text-body-lg"
              />
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anda"
                required
                className="w-full rounded-lg border border-neutral-300 focus:ring-error focus:border-error mb-6 text-body-sm py-4 px-4"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password anda"
                required
                className="w-full rounded-lg border border-neutral-300 focus:ring-error focus:border-error mb-8 md:mb-12 text-body-sm py-4 px-4 pr-12"
              />
              <Image
                className="absolute right-4 md:right-6 top-6 -translate-y-1/2 cursor-pointer"
                src={showPassword ? "/icons/eye.svg" : "/icons/eye-slash.svg"}
                width={24}
                height={24}
                alt="Toggle Password Visibility"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <button
              type="submit"
              className="rounded-lg py-4 w-full bg-brand-primary text-white text-h6 font-bold mb-10 sm:mb-0"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>

      {/* Gambar Desktop */}
      <div className="hidden md:flex bg-brand-primary w-[44vw] items-center justify-center px-12">
        <Image
          src="/assets/logos/login-logo.png"
          width={600}
          height={600}
          alt="Login Logo"
          priority
        />
      </div>
    </div>
  );
}
