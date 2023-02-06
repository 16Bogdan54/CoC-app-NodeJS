import React from "react";
import TroopsList from "./troopsList/TroopsList";
import HeroesList from "./heroesList/HeroesList";
import SpellList from "./spellList/SpellList";

const Units = () => {
  return (
    <div>
      <TroopsList />
      <HeroesList />
      <SpellList />
      {/*<SiegeMachineList />*/}
    </div>
  );
};

export default Units;
