import "./header.css";
import { ComponentType } from "react";

const Header = ({
  name,
  icon: Icon,
  color,
  backgroundColor,
}: {
  name: string;
  icon: ComponentType<{ size?: number }>;
  color?: string;
  backgroundColor?: string;
}) => {
  return (
    <div
      className="flex justify-between items-center header"
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      <h1>{name}</h1>
      <Icon size={25} />
    </div>
  );
};

export default Header;
