import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.LoaderBlock}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="gray"
        strokeColor="gray"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
