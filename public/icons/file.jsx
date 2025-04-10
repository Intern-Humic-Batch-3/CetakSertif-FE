export default function File({ className }) {
	return (
		<>
			<svg
				className={className}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none" />
				<path
					d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
					fill="none"
					stroke="currentColor"
					strokelinep="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
				<polyline
					points="152 32 152 88 208 88"
					fill="none"
					stroke="currentColor"
					strokelinep="round"
					strokeLinejoin="round"
					strokeWidth="16"
				/>
			</svg>
		</>
	);
}
