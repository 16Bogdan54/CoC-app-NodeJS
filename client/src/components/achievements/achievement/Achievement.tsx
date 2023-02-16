import { renderStars } from "@/components/utils/utils";

import style from "./achievement.module.css";

type Props = {
  name: string;
  info: string;
  stars: number;
};

const Achievement = ({ name, info, stars }: Props) => {
  return (
    <div className={style.achieve_container}>
      <span className="text-xl">{renderStars(stars)}</span>
      <div className="ml-2">
        <h3 className="text-xl">{name}</h3>
        <p className="text-xl">{info}</p>
      </div>
      <span className="ml-auto text-2xl">✅</span>
    </div>
  );
};

export default Achievement;
