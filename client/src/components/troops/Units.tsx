import TroopsList from "@/components/troops/troopsList/TroopsList";
import HeroesList from "@/components/troops/heroesList/HeroesList";
import SpellList from "@/components/troops/spellList/SpellList";
import SiegeMachineList from "@/components/troops/siegeMachineList/SiegeMachineList";

const Units = () => {
  return (
    <div>
      <TroopsList />
      <HeroesList />
      <SpellList />
      <SiegeMachineList />
    </div>
  );
};

export default Units;
