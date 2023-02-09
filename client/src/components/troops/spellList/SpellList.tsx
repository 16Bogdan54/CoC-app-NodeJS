import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { getIconURL } from "@/components/utils/utils";

const SpellList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div className="w-full flex items-center justify-center">
      {player.spells.map((spell, index) => (
        <div key={index}>
          {/*<h1>{spell.name}</h1>*/}
          <img width={50} src={getIconURL(spell.name)} alt="icon" />
          <h1>{spell.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default SpellList;
