import { Navbar } from "@/_components/userPageComponents";

export default function UserHomepage() {
	return (
		<main>
			<Navbar />
			<p>this is user homepage</p>
			<p className="text-primary">this is primary color</p>
			<p className="text-secondary">this is secondary color</p>
		</main>
	);
}
