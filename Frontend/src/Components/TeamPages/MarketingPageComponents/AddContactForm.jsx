// src/components/AddContactForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const AddContactForm = ({ onSubmit, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		location: "",
		photoUrl: "",
		linkedin: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-6 rounded-lg w-96">
				<h2 className="text-xl font-bold mb-4">Add New Contact</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Photo URL"
						className="w-full mb-3 p-2 border rounded"
						value={formData.photoUrl}
						onChange={(e) =>
							setFormData({
								...formData,
								photoUrl: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Name"
						className="w-full mb-3 p-2 border rounded"
						value={formData.name}
						onChange={(e) =>
							setFormData({ ...formData, name: e.target.value })
						}
					/>
					<input
						type="email"
						placeholder="Email"
						className="w-full mb-3 p-2 border rounded"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
					<input
						type="tel"
						placeholder="Phone"
						className="w-full mb-3 p-2 border rounded"
						value={formData.phone}
						onChange={(e) =>
							setFormData({ ...formData, phone: e.target.value })
						}
					/>
					<input
						type="text"
						placeholder="Location"
						className="w-full mb-3 p-2 border rounded"
						value={formData.location}
						onChange={(e) =>
							setFormData({
								...formData,
								location: e.target.value,
							})
						}
					/>
					<input
						type="url"
						placeholder="LinkedIn URL"
						className="w-full mb-3 p-2 border rounded"
						value={formData.linkedin}
						onChange={(e) =>
							setFormData({
								...formData,
								linkedin: e.target.value,
							})
						}
					/>
					<div className="flex justify-end gap-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-200 rounded"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded"
						>
							Add Members
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

AddContactForm.propTypes = {
	onSubmit: PropTypes.node,
	onClose: PropTypes.node,
};
export default AddContactForm;
