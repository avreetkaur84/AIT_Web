import React, { useState } from "react";
import AddContactForm from "./TeamPageComponents/AddContactForm";
import HeaderCard from "./TeamPageComponents/HeaderCard";
import ContactCard from "./TeamPageComponents/ContactCard";

const marketingTeamLead = {
	name: 'Michael Davis',
	phone: '+1 555 321 6549',
	email: 'michael.davis@marketgenius.com',
	profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
	bio: 'Digital marketing strategist with expertise in SEO, social media campaigns, and lead generation. Proven track record of increasing brand visibility and engagement.',
  };

function MarketingPage() {
	const [contacts, setContacts] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const handleAddContact = (newContact) => {
		setContacts([...contacts, newContact]);
	};


	return (
		<div className="min-h-screen bg-white">
			<HeaderCard
				name={marketingTeamLead.name}
				phone={marketingTeamLead.phone}
				email={marketingTeamLead.email}
				profileImage={marketingTeamLead.profileImage}
				bio={marketingTeamLead.bio}
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

export default MarketingPage;
