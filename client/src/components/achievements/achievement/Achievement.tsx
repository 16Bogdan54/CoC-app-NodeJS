import { renderStars } from "@/components/utils/utils";

type Props = {
  name: string;
  info: string;
  stars: number;
};

const Achievement = ({ name, info, stars }: Props) => {
  return (
    <div className="flex items-center justify-center w-1/3">
      <span>{renderStars(stars)}</span>
      <div>
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
      <span>✅</span>
    </div>
  );
};

export default Achievement;
