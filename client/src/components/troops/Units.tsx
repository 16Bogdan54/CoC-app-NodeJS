import TroopsList from "@/components/troops/troopsList/TroopsList";
import HeroesList from "@/components/troops/heroesList/HeroesList";
import SpellList from "@/components/troops/spellList/SpellList";
import SiegeMachineList from "@/components/troops/siegeMachineList/SiegeMachineList";
import { Grid } from "@mui/material";

const Units = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <HeroesList />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SiegeMachineList />
      </Grid>
      <Grid item xs={12}>
        <TroopsList />
      </Grid>
      <Grid item xs={12}>
        <SpellList />
      </Grid>
    </Grid>
  );
};

export default Units;
