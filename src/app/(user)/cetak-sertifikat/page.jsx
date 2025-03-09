import { Navbar } from "@/_components/userPageComponents";
import { Colors } from "@/utils/colors";

export default function UserHomepage() {
	return (
		<main>
			<Navbar />
			<p>this is user homepage</p>
			<p className={`text-[${Colors.primary}]`}>this is primary color</p>
		</main>
	);
}
