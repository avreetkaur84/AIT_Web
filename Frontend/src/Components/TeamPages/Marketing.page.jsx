import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const ADMIN_PASSWORD = "#atmmanagement324#";

const HeaderCard = ({
	name,
	phone,
	email,
	profileImage,
	bio,
	linkedinId,
	onDelete,
}) => {
	const [showDeleteForm, setShowDeleteForm] = useState(false);

	return (
		<div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 m-4 flex flex-col md:flex-row items-center gap-8 relative">
			<button
				onClick={() => setShowDeleteForm(true)}
				className="absolute top-4 right-4 text-red-500 hover:text-red-700"
			>
				<FaTrash />
			</button>

			<a
				href={linkedinId}
				target="_blank"
				rel="noopener noreferrer"
				className="cursor-pointer"
			>
				<div className="w-48 h-48 overflow-hidden rounded-full flex-shrink-0">
					<img
						src={profileImage}
						alt={name}
						className="w-full h-full object-cover"
					/>
				</div>
			</a>
			<div className="flex flex-col items-center md:items-start text-center md:text-left">
				<h1 className="text-3xl font-bold text-gray-800 mb-2">
					{name}
				</h1>
				<p className="text-gray-600 mb-1 text-lg">{phone}</p>
				<p className="text-gray-600 mb-4 text-lg">{email}</p>
				<p className="text-gray-700 max-w-xl leading-relaxed">{bio}</p>
			</div>

			{showDeleteForm && (
				<DeleteConfirmationForm
					onClose={() => setShowDeleteForm(false)}
					onDelete={onDelete}
				/>
			)}
		</div>
	);
};

const ContactCard = ({ contact, onDelete }) => {
	const [showDeleteForm, setShowDeleteForm] = useState(false);

	return (
		<div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center relative">
			<button
				onClick={() => setShowDeleteForm(true)}
				className="absolute top-4 right-4 text-red-500 hover:text-red-700"
			>
				<FaTrash />
			</button>

			<div className="w-32 h-32 mb-4">
				<img
					src={contact.profileImage}
					alt={contact.name}
					className="w-full h-full rounded-full object-cover"
				/>
			</div>
			<div className="text-center">
				<h3 className="font-bold text-xl mb-2">{contact.name}</h3>
				<p className="text-gray-600 mb-1">{contact.email}</p>
				<p className="text-gray-600">{contact.phone}</p>
			</div>

			{showDeleteForm && (
				<DeleteConfirmationForm
					onClose={() => setShowDeleteForm(false)}
					onDelete={onDelete}
				/>
			)}
		</div>
	);
};

const DeleteConfirmationForm = ({ onClose, onDelete }) => {
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === ADMIN_PASSWORD) {
			onDelete();
			onClose();
		} else {
			setError("Incorrect password");
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg w-96">
				<h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 border rounded"
						required
					/>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
						>
							Delete
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const TeamLeaderForm = ({ onSubmit, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		linkedinId: "",
		profileImage: "",
		bio: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password === ADMIN_PASSWORD) {
			const { password, ...submitData } = formData;
			onSubmit(submitData);
		} else {
			setError("Incorrect password");
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
				<h2 className="text-xl font-bold mb-4">Add Team Leader</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="url"
						name="linkedinId"
						placeholder="LinkedIn Profile URL"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="url"
						name="profileImage"
						placeholder="Profile Image URL"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<textarea
						name="bio"
						placeholder="Bio"
						onChange={handleChange}
						className="w-full p-2 border rounded h-24"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const AddContactForm = ({ onSubmit, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		profileImage: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.password === ADMIN_PASSWORD) {
			const { password, ...submitData } = formData;
			onSubmit(submitData);
			onClose();
		} else {
			setError("Incorrect password");
		}
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white p-6 rounded-lg w-96">
				<h2 className="text-xl font-bold mb-4">Add Contact</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="tel"
						name="phone"
						placeholder="Phone Number"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="url"
						name="profileImage"
						placeholder="Profile Image URL"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter Password"
						onChange={handleChange}
						className="w-full p-2 border rounded"
						required
					/>
					{error && <p className="text-red-500 text-sm">{error}</p>}
					<div className="flex justify-end space-x-2">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

const MarketingPage = () => {
	const [teamLead, setTeamLead] = useState(null);
	const [contacts, setContacts] = useState([]);
	const [showContactForm, setShowContactForm] = useState(false);
	const [showLeaderForm, setShowLeaderForm] = useState(false);

	const handleAddContact = (newContact) => {
		setContacts([...contacts, newContact]);
		setShowContactForm(false);
	};

	const handleAddTeamLead = (newLeader) => {
		setTeamLead(newLeader);
		setShowLeaderForm(false);
	};

	const handleDeleteContact = (index) => {
		const newContacts = contacts.filter((_, i) => i !== index);
		setContacts(newContacts);
	};

	const handleDeleteTeamLead = () => {
		setTeamLead(null);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{teamLead && (
				<HeaderCard {...teamLead} onDelete={handleDeleteTeamLead} />
			)}

			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{contacts.map((contact, index) => (
						<ContactCard
							key={index}
							contact={contact}
							onDelete={() => handleDeleteContact(index)}
						/>
					))}
				</div>
			</div>

			<footer className="fixed bottom-0 w-full bg-white shadow-lg p-4 flex justify-center space-x-4">
				<button
					onClick={() => setShowContactForm(true)}
					className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
				>
					Add Contact
				</button>
				{!teamLead && (
					<button
						onClick={() => setShowLeaderForm(true)}
						className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
					>
						Add Team Leader
					</button>
				)}
			</footer>

			{showContactForm && (
				<AddContactForm
					onSubmit={handleAddContact}
					onClose={() => setShowContactForm(false)}
				/>
			)}

			{showLeaderForm && (
				<TeamLeaderForm
					onSubmit={handleAddTeamLead}
					onClose={() => setShowLeaderForm(false)}
				/>
			)}
		</div>
	);
};

export default MarketingPage;
