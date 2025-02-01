import React, { useState } from "react";
import AddContactForm from "./TeamPageComponents/AddContactForm";
import HeaderCard from "./TeamPageComponents/HeaderCard";
import ContactCard from "./TeamPageComponents/ContactCard";

const user = {
  name: 'Sarah Lee',
  phone: '+1 555 987 6543',
  email: 'sarah.lee@brandingco.com',
  profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
  bio: 'Branding specialist with over 10 years of experience in crafting strong brand identities. Passionate about storytelling and creating meaningful customer connections.',
};


function BrandingPage() {

  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderCard
        name={user.name}
        phone={user.phone}
        email={user.email}
        profileImage={user.profileImage}
        bio={user.bio}
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

export default BrandingPage