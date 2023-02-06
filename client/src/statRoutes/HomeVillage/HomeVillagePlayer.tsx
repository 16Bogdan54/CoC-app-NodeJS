import React from "react";
// import PlayerInfo from "../../components/player/playerInfo/PlayerInfo";
// import ClanInfo from "../../components/player/clanInfo/ClanInfo";
// import LeagueInfo from "../../components/player/leagueInfo/LeagueInfo";
// import BottomInfo from "../../components/player/bottomInfo/BottomInfo";
import Player from "../../components/player/Player";
import TroopsList from "../../components/troops/troopsList/TroopsList";
import HeroesList from "../../components/troops/heroesList/HeroesList";
import SpellList from "../../components/troops/spellList/SpellList";
import SiegeMachineList from "../../components/troops/siegeMachineList/SiegeMachineList";

const HomeVillagePlayer = () => {
  return (
    <div>
      <Player />
      <hr />
      <TroopsList />
      <HeroesList />
      <SpellList />
      <SiegeMachineList />
    </div>
  );
};

export default HomeVillagePlayer;
