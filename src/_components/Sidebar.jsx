import Image from "next/image";
import Certificate from "../../public/icons/certificate";

export default function Sidebar({ className }) {
	return (
		<div className={`${className}`}>
			<Image
				className="w-32"
				width={200}
				height={200}
				src="/logo1.png"
				alt="Logo Humic Engineering"
			/>
			<section className="bg-secondary text-white rounded-lg p-5">
				<h3 className="text-lg font-semibold">Daniel Admin</h3>
				<p>danieladmin@gmail.com</p>
			</section>
			<section className="p-5">
				<ul>
					<li className="flex items-center text-lg text-primary">
						<Certificate className={"w-10"} />
						<p className="font-semibold">Cetak Sertifikat</p>
					</li>
				</ul>
			</section>
		</div>
	);
}
