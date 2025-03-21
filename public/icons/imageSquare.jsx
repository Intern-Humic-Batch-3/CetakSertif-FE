export default function ImageSquare({ className }) {
	return (
		<>
			<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none" />
				<rect
					x="40"
					y="40"
					width="176"
					height="176"
					rx="8"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<circle
					cx="96"
					cy="96"
					r="16"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<path
					d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		</>
	);
}
