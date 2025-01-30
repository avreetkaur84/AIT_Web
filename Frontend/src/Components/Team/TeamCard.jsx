import { useNavigate } from "react-router-dom";

const TeamCard = ({ team }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(team.lin);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition duration-300 ease-in-out border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800">{team.name}</h2>
      <p className="text-gray-600 text-sm mt-2 text-center">{team.description}</p>
    </div>
  );
};

export default TeamCard;