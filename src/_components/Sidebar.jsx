import Certificate from "@/icons/certificate";
import File from "@/icons/file";
import UserCircle from "@/icons/user";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<>
			<section className="flex flex-col gap-y-10">
				<Image
					className="w-32 md:w-52"
					width={200}
					height={200}
					src="/assets/logos/navbar-logo.png"
					alt="Logo Humic Engineering"
				/>
				<section className="bg-brand-secondary text-white rounded-lg p-3 md:p-5">
					<h3 className="text-sm md:text-lg font-semibold">Daniel Admin</h3>
					<p className="text-sm md:text-base">danieladmin@gmail.com</p>
				</section>
				<section className="px-5">
					<ul className="flex flex-col gap-y-10">
						<li
							className={`flex items-center text-lg ${
								(pathname == "/dashboard") |
								(pathname == "/dashboard/tambah-sertifikat") |
								(pathname == "/dashboard/input-data-sertifikat")
									? "text-brand-primary"
									: "text-black"
							} hover:text-brand-primary gap-x-5`}>
							<Certificate className={"hidden md:block w-10"} />
							<Link
								href={"/dashboard"}
								className="text-sm md:text-base font-semibold cursor-pointer">
								Cetak Sertifikat
							</Link>
						</li>
						<li
							className={`flex items-center text-lg ${
								pathname == "/daftar-pengguna" ? "text-brand-primary" : "text-black"
							} hover:text-brand-primary gap-x-5`}>
							<UserCircle className={"hidden md:block w-10"} />
							<Link
								href={"/daftar-pengguna"}
								className="text-sm md:text-base font-semibold cursor-pointer">
								Daftar Pengguna
							</Link>
						</li>
						<li
							className={`flex items-center text-lg ${
								pathname == "/template-humic" ? "text-brand-primary" : "text-black"
							} hover:text-brand-primary gap-x-5`}>
							<File className={"hidden md:block w-10"} />
							<Link
								href={"/template-humic"}
								className="text-sm md:text-base font-semibold cursor-pointer">
								Template Humic
							</Link>
						</li>
						<li className="block md:hidden text-sm md:text-base font-semibold cursor-pointer">
							Cara Kerja
						</li>
					</ul>
				</section>
			</section>
			<section>
				<button className="w-full flex items-center bg-brand-primary text-white font-semibold gap-x-3 p-3 md:p-2 rounded-lg">
					<Image
						className="hidden md:block w-10 cursor-pointer"
						src={"/icons/logout.svg"}
						width={100}
						height={100}
						alt="trash icon"
					/>
					Logout
				</button>
			</section>
		</>
	);
}
