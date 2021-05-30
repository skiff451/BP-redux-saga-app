import Image from "next/image";
import { useDispatch } from "react-redux";
import { getFilmInfo } from "../../redux/actionCreators";

import styles from "./Item.module.scss";

const SearchedFilmItem = ({ title, image, id }: FilmSearchItem): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.item}
      onClick={() => {
        dispatch(getFilmInfo(id));
      }}
    >
      <Image src={image} width={100} height={150} />
      <span className={styles.text}>{title}</span>
    </div>
  );
};

export default SearchedFilmItem;
