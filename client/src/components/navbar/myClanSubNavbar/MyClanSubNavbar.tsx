import NavButton from "@/components/navbar/navButton/NavButton";

const MyClanSubNavbar = () => {
  return (
    <div className="flex justify-evenly">
      <NavButton to="/my-clan/">Home Village</NavButton>
      <NavButton to="/my-clan/builder-base-clan">Builder Base</NavButton>
      <NavButton to="/my-clan/capital-clan">Clan Capital</NavButton>
    </div>
  );
};

export default MyClanSubNavbar;
