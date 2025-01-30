// src/components/HeaderCard.jsx
const HeaderCard = () => {
	return (
		<div className="container mx-auto max-w-4xl">
			<div className="bg-white shadow-lg rounded-lg p-6 m-4 flex">
				<div className="w-1/3">
					<img
						src="https://randomuser.me/api/portraits/men/1.jpg"
						alt="Profile"
						className="rounded-lg w-full h-auto"
					/>
				</div>
				<div className="w-2/3 pl-6">
					<div className="mb-4">
						<h2 className="text-2xl font-bold">Alex Johnson</h2>
						<p className="text-gray-600">+1 555 123 4567</p>
						<p className="text-gray-600">
							alex.johnson@example.com
						</p>
					</div>
					<p className="text-gray-700">
						Senior Software Developer with 8 years of experience in
						full-stack development. Specialized in React, Node.js,
						and Cloud Technologies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeaderCard;
