// src/components/ContactCard.jsx
import PropTypes from "prop-types";
const ContactCard = ({ contact }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden">
			<a
				href={contact.linkedin}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={contact.photoUrl}
					alt={contact.name}
					className="w-full h-58 object-cover hover:opacity-75 transition-opacity"
				/>
			</a>
			<div className="p-4">
				<h3 className="font-bold text-lg">{contact.name}</h3>
				<p className="text-gray-600">{contact.email}</p>
				<p className="text-gray-600">{contact.phone}</p>
				<p className="text-gray-600">{contact.location}</p>
			</div>
		</div>
	);
};

ContactCard.propTypes = {
	contact: PropTypes.node,
};
export default ContactCard;
