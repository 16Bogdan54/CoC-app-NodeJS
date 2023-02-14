import style from "./expLvl.module.css";

type Props = {
  expLvl: number;
};

const ExperienceLevel = ({ expLvl }: Props) => {
  return <div className={style.expLvl}>{expLvl}</div>;
};

export default ExperienceLevel;
