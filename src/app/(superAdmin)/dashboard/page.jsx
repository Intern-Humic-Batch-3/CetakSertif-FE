"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

export default function Page() {
	const [addCertificateButton, setAddCertificateButton] = useState(false);
	const certificates = [
		{
			imageUrl: "/assets/certificate/cerfiticate-template.png",
			title: "Workshop Humic Engineering",
		},
		{
			imageUrl: "/assets/certificate/cerfiticate-template.png",
			title: "Webinar Humic Engineering",
		},
		{
			imageUrl: "/assets/certificate/cerfiticate-template.png",
			title: "Seminar Humic Engineering",
		},
		{
			imageUrl: "/assets/certificate/cerfiticate-template.png",
			title: "Family Gathering Humic Engineering",
		},
		{
			imageUrl: "/assets/certificate/cerfiticate-template.png",
			title: "Talk Show Humic Engineering",
		},
	];

	return (
		<>
			{!addCertificateButton && (
				<>
					<section className="my-10 bg-gray-100 flex items-center text-lg font-medium py-2 px-3 rounded-lg">
						<Image
							className="w-7 cursor-pointer"
							src={"/icons/search.svg"}
							width={100}
							height={100}
							alt="trash icon"
						/>
						<input
							type="text"
							className="text-gray-500 bg-transparent focus:border-0 focus:ring-0 border-0"
							placeholder="Cari data pengguna"
						/>
					</section>
					<section className="max-h-[70vh] grid grid-cols-12 gap-10 overflow-auto">
						{certificates.map((certificate, index) => (
							<div
								key={index}
								className="col-span-4 flex flex-col items-center border rounded-lg p-5 gap-5">
								<Image
									className="w-full"
									src={certificate.imageUrl}
									width={400}
									height={400}
									alt="Certificate example"
								/>
								<p className="font-semibold">{certificate.title}</p>
								<div className="flex items-center gap-10">
									<Image
										className="w-8"
										src="/icons/pencil.svg"
										width={20}
										height={20}
										alt="Edit button"
									/>
									<Image
										className="w-8"
										src="/icons/trash.svg"
										width={20}
										height={20}
										alt="Delete button"
									/>
									<Dropdown
										color="default"
										size="xs"
										dismissOnClick={false}
										label={
											<Image
												className="w-8"
												src="/icons/download.svg"
												width={20}
												height={20}
												alt="Download button"
											/>
										}>
										<Dropdown.Item>JPG</Dropdown.Item>
										<Dropdown.Item>PNG</Dropdown.Item>
									</Dropdown>
								</div>
							</div>
						))}
					</section>
					{/* <section className="min-h-[85vh] flex justify-center items-center">
						<div className="flex flex-col justify-center items-center gap-y-5 text-center">
							<Image
								className="w-32 cursor-pointer"
								src={"/icons/warning.svg"}
								width={100}
								height={100}
								alt="trash icon"
							/>
							<h1 className="text-3xl font-bold">Belum ada sertifikat!</h1>
							<h3 className="text-xl">
								Silahkan membuat sertifikat yang anda inginkan!
							</h3>
							<Link
								href="/dashboard/tambah-sertifikat"
								className="w-full bg-brand-primary text-white font-semibold text-xl p-3 rounded-lg">
								Tambah
							</Link>
						</div>
					</section> */}
				</>
			)}
		</>
	);
}
