"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TemplateHumic() {
	return (
		<section className="mt-10 flex flex-col items-center gap-y-5">
			<Image
				className="w-[650px] border-2 rounded-lg p-5"
				src="/assets/certificate/cerfiticate-template.png"
				width={700}
				height={650}
				alt="Humic Template Sertifikat"
			/>
			<section className="flex flex-col items-start gap-y-8">
				<h1 className="text-2xl font-semibold">Template Humic Sertifikat</h1>
				<p className="text-lg font-normal">
					Ukuran 4x4 <br /> 29,7 x 21 Cm
				</p>
				<div className="flex items-center">
					<Image
						className="w-24"
						src="/assets/logos/login-logo.png"
						width={200}
						height={200}
						alt="Humic Engineering Logo"
					/>
					<h3 className="font-semibold">CoE Humic Engineering Research Center</h3>
				</div>
        <div className="flex items-center gap-5">
          <Link href="/dashboard">
            <button className="w-full border-2 border-brand-primary text-brand-primary font-semibold p-5 rounded-lg">Kembali</button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-brand-primary text-white font-semibold p-5 rounded-lg">Gunakan Template Ini</button>
          </Link>
        </div>
			</section>
		</section>
	);
}
