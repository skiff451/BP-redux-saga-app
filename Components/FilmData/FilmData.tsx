import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "./FilmData.module.scss";

function FilmData(): JSX.Element {
  const filmDataState = useSelector((state: ICombinedState) => state.FilmInfo);
  const info = filmDataState.info;
  const { title, year, length, rating, poster, plot } = info;

  return (
    <div className={styles["film-info-wrapper"]}>
      <h2>Film Information</h2>
      <div className={styles["film-wrapper"]}>
        <h3>{title}</h3>
        {poster && <Image src={poster} width={350} height={550} />}
        <p>{plot}</p>
        <span>{` year ${year}`}</span>
        <span>{` length ${length}`}</span>
        <span>{` rating ${rating}`}</span>
      </div>
    </div>
  );
}

export default FilmData;
