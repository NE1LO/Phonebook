import { ThreeCircles } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.LoaderBlock}>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="white"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
