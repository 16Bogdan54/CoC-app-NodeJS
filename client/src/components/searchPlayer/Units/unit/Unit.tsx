import style from "src/components/troops/unit/unit.module.css";

type Props = {
  picURL: string;
  lvl: number;
};

const Unit = ({ picURL, lvl }: Props) => {
  return (
    <div className={style.unit}>
      <img src={picURL} alt="unit" />
      <span className={style.lvl}>{lvl}</span>
    </div>
  );
};

export default Unit;
