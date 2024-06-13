import menuIconClosed from "../resurses/menuIconClosed.svg";
import menuIconOpen from "../resurses/menuIconOpen.svg";
export interface BurgerProps {
  open: boolean;
  onBurger: () => void;
}
const Burger = (props: BurgerProps) => {
  const burgerRender = props.open ? (
    <button
      onClick={() => props.onBurger()}
      className="size-fit border-l border-white pl-[20px] desk:hidden"
    >
      <img src={menuIconOpen} alt="burger" className="w-10 h-10" />
    </button>
  ) : (
    <button
      onClick={() => props.onBurger()}
      className="size-fit border-l border-white pl-[20px] desk:hidden"
    >
      <img
        src={menuIconClosed}
        alt="burger"
        className="w-10 h-10  "
        onClick={() => props.onBurger()}
      />
    </button>
  );

  return <>{burgerRender}</>;
};

export default Burger;
