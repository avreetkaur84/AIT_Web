import PropTypes from "prop-types";
const ContactCard = ({ contact }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden">
			<div className="p-4 flex justify-center">
				<a
					href={contact.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="w-40 h-40"
				>
					<img
						src={contact.photoUrl}
						alt={contact.name}
						className="w-full h-full rounded-full object-cover hover:opacity-75 transition-opacity"
					/>
				</a>
			</div>
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
	contact: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
		location: PropTypes.string,
		photoUrl: PropTypes.string,
		linkedin: PropTypes.string,
	}),
};

export default ContactCard;
