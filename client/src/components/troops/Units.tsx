import TroopsList from "@/components/troops/troopsList/TroopsList";
import HeroesList from "@/components/troops/heroesList/HeroesList";
import SpellList from "@/components/troops/spellList/SpellList";
import SiegeMachineList from "@/components/troops/siegeMachineList/SiegeMachineList";

import style from "./styles/units.module.css";

const Units = () => {
  return (
    <div className={style.units_container}>
      <div className={style.units_inner}>
        <div>
          <HeroesList />
        </div>
        <div>
          <TroopsList />
          <SpellList />
          <SiegeMachineList />
        </div>
      </div>
    </div>
  );
};

export default Units;
