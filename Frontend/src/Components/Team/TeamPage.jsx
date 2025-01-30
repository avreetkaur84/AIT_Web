import TeamCard from "./TeamCard";

const teams = [
  { id: 1, name: "Marketing", description: "Handles promotions and outreach.", lin: "/marketingTeam"},
  { id: 2, name: "Branding", description: "Manages visual identity and brand consistency.", lin: "/brandingTeam" },
  { id: 3, name: "Tech", description: "Develops and maintains technical infrastructure.", lin: "/techTeam" },
  { id: 4, name: "Operations", description: "Oversees logistics and event execution.", lin: "/operationTeam" },
  { id: 5, name: "Sponsorship", description: "Secures partnerships and funding.", lin: "/sponsorshipTeam" },
  { id: 6, name: "Design", description: "Creates visual content and event materials.", lin: "/designTeam"}
];

const TeamPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Teams Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team}/>
        ))}
      </div> 
    </div>
  );
};

export default TeamPage;