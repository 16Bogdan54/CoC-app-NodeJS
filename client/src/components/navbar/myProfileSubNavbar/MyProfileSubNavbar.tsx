import NavButton from "@/components/navbar/navButton/NavButton";

const MyProfileSubNavbar = () => {
  return (
    <div className="flex justify-evenly">
      <NavButton to="/my-profile">Home Village</NavButton>
      <NavButton to="/my-profile/builder-base-profile">Builder Base</NavButton>
      <NavButton to="/my-profile/clan-capital-profile">Clan Capital</NavButton>
    </div>
  );
};

export default MyProfileSubNavbar;
