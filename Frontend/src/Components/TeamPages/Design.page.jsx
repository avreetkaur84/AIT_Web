import React, { useState } from "react";
import AddContactForm from "./TeamPageComponents/AddContactForm";
import HeaderCard from "./TeamPageComponents/HeaderCard";
import ContactCard from "./TeamPageComponents/ContactCard";

const designTeamLead = {
  name: 'David Wilson',
  phone: '+1 555 442 8765',
  email: 'david.wilson@designworks.com',
  profileImage: 'https://randomuser.me/api/portraits/men/7.jpg',
  bio: 'Creative director and designer with a passion for user-centered design. 10+ years of experience crafting visually compelling and user-friendly designs for digital platforms.',
};

function DesignPage() {
  const [contacts, setContacts] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const handleAddContact = (newContact) => {
		setContacts([...contacts, newContact]);
	};


	return (
		<div className="min-h-screen bg-white">
			<HeaderCard
				name={designTeamLead.name}
				phone={designTeamLead.phone}
				email={designTeamLead.email}
				profileImage={designTeamLead.profileImage}
				bio={designTeamLead.bio}
			/>

			<div className="container mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{contacts.map((contact, index) => (
						<ContactCard key={index} contact={contact} />
					))}
				</div>
			</div>

			<footer className="fixed bottom-0 w-full bg-white shadow-lg p-4">
				<button
					onClick={() => setShowForm(true)}
					className="mx-auto block bg-blue-500 text-white px-6 py-2 rounded-lg"
				>
					Add Contact
				</button>
			</footer>

			{showForm && (
				<AddContactForm
					onSubmit={handleAddContact}
					onClose={() => setShowForm(false)}
				/>
			)}
		</div>
	);
}

export default DesignPage