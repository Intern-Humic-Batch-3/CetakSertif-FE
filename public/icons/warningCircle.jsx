export default function WarningCircle({ className }) {
	return (
		<>
			<svg
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none" />
				<circle
					cx="128"
					cy="128"
					r="96"
					fill="none"
					stroke="currentColor"
					strokeMiterlimit="10"
					strokeWidth="16"
				/>
				<line
					x1="128"
					y1="136"
					x2="128"
					y2="80"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<circle cx="128" cy="172" r="12" />
			</svg>
		</>
	);
}
