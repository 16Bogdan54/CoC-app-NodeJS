import NavButton from "@/components/navbar/navButton/NavButton";
import { Stack } from "@mui/material";

const MyClanSubNavbar = () => {
  return (
    <Stack
      direction="column"
      sx={{ position: "fixed" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <NavButton to="/my-clan/">Home Village</NavButton>
      <NavButton to="/my-clan/builder-base-clan">Builder Base</NavButton>
      <NavButton to="/my-clan/capital-clan">Clan Capital</NavButton>
    </Stack>
    // <div className="flex justify-evenly">
    //     //   <NavButton to="/my-clan/">Home Village</NavButton>
    //     //   <NavButton to="/my-clan/builder-base-clan">Builder Base</NavButton>
    //     //   <NavButton to="/my-clan/capital-clan">Clan Capital</NavButton>
    //     // </div>
  );
};

export default MyClanSubNavbar;
