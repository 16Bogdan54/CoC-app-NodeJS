import NavButton from "@/components/navbar/navButton/NavButton";
import { Stack } from "@mui/material";

const MyProfileSubNavbar = () => {
  return (
    <Stack
      direction="column"
      sx={{ position: "fixed" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <NavButton to="/">Home Village</NavButton>
      <NavButton to="/my-profile/builder-base-profile">Builder Base</NavButton>
      <NavButton to="/my-profile/clan-capital-profile">Clan Capital</NavButton>
    </Stack>
    // <div className="flex justify-evenly">
    //   <NavButton to="/">Home Village</NavButton>
    //   <NavButton to="/my-profile/builder-base-profile">Builder Base</NavButton>
    //   <NavButton to="/my-profile/clan-capital-profile">Clan Capital</NavButton>
    // </div>
  );
};

export default MyProfileSubNavbar;
