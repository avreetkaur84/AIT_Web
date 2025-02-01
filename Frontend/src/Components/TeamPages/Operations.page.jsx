import React from 'react'

function OperationPage() {

  const operationsTeamLead = {
    name: 'James Thompson',
    phone: '+1 555 112 2334',
    email: 'james.thompson@operationshub.com',
    profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
    bio: 'Operations manager with a focus on streamlining processes and improving efficiency. Experienced in team management, logistics, and resource optimization.',
  };

  const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
  
    const handleAddContact = (newContact) => {
      setContacts([...contacts, newContact]);
    };

  return (
    <div className="min-h-screen bg-white">
			<HeaderCard
				name={operationsTeamLead.name}
				phone={operationsTeamLead.phone}
				email={operationsTeamLead.email}
				profileImage={operationsTeamLead.profileImage}
				bio={operationsTeamLead.bio}
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
  )
}

export default OperationPage