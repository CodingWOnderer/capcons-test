export function BannerComponent() {
	return (
		<div className="px-4 sm:px-6 !my-8">
			<a
				href="/collections?new_arrival=true"
				className="relative   rounded-lg h-full overflow-clip  mx-auto cursor-pointer"
			>
				<img
					src={
						"https://capconscom.s3.ap-south-1.amazonaws.com/templates/template-teddyboy/new_arrivals.jpg"
					}
					height={1220}
					width={3864}
					className=" w-full rounded-lg h-full object-cover"
					alt="new arrivals"
				/>
			</a>
		</div>
	);
}
