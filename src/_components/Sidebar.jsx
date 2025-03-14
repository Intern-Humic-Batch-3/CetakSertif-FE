import Certificate from "@/icons/certificate";
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
					className="w-52"
					width={200}
					height={200}
					src="/logo1.png"
					alt="Logo Humic Engineering"
				/>
				<section className="bg-brand-secondary text-white rounded-lg p-5">
					<h3 className="text-lg font-semibold">Daniel Admin</h3>
					<p>danieladmin@gmail.com</p>
				</section>
				<section className="px-5">
					<ul className="flex flex-col gap-y-5">
						<li
							className={`flex items-center text-lg ${
								(pathname == "/dashboard") |
								(pathname == "/dashboard/tambah-sertifikat") |
								(pathname == "/dashboard/input-data-sertifikat")
									? "text-brand-primary"
									: "text-black"
							} hover:text-brand-primary gap-x-5`}>
							<Certificate className={"w-10"} />
							<Link href={"/dashboard"} className="font-semibold cursor-pointer">
								Cetak Sertifikat
							</Link>
						</li>
						<li
							className={`flex items-center text-lg ${
								pathname == "/daftar-pengguna" ? "text-brand-primary" : "text-black"
							} hover:text-brand-primary gap-x-5`}>
							<UserCircle className={"w-10"} />
							<Link href={"/daftar-pengguna"} className="font-semibold cursor-pointer">
								Daftar Pengguna
							</Link>
						</li>
					</ul>
				</section>
			</section>
			<section>
				<button className="w-full flex items-center bg-brand-primary text-white font-semibold gap-x-3 p-2 rounded-lg">
					<Image
						className="w-10 cursor-pointer"
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
