"use client";

import Image from "next/image";
import { Label } from "flowbite-react";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-[56vw] flex items-center justify-center text-black">
        <h5 className="fixed top-10 left-11 text-2xl flex font-bold">
          Website Cetak Sertifikat -
          <span className="text-brand-primary"> HUMIC ENGINEERING</span>
        </h5>
        <div className="flex flex-col w-[464px]">
          <h2 className="text-h2 text-black font-semibold mb-24 text-center">
            Login
          </h2>
          <form className="flex flex-col">
            <div>
              <Label
                htmlFor="email"
                value="Email"
                className="mb-4 block font-semibold text-body-lg"
              />
              <input
                id="email"
                type="email"
                placeholder="Masukkan email anda"
                required
                className="w-full rounded-lg focus:ring-error focus:border-error mb-6 text-body-sm py-5 px-4"
              />
            </div>
            <div>
              <Label
                htmlFor="password"
                value="Password"
                className="mb-4 block font-semibold text-body-lg"
              />
              <input
                id="password"
                type="password"
                placeholder="Masukkan Password anda"
                required
                className="w-full rounded-lg focus:ring-error focus:border-error mb-[70px] text-body-sm py-5 px-4"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg py-4 w-full bg-brand-primary text-white text-h6 font-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="bg-brand-primary w-[44vw] flex items-center justify-center">
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
