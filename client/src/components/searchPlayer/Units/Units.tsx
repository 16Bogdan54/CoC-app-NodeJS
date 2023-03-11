import TroopsList from "@/components/searchPlayer/Units/troopsList/TroopsList";
import HeroesList from "@/components/searchPlayer/Units/heroesList/HeroesList";
import SpellList from "@/components/searchPlayer/Units/spellList/SpellList";
import SiegeMachineList from "@/components/searchPlayer/Units/siegeMachineList/SiegeMachineList";
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
