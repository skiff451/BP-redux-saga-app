import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchFilms } from "../../redux/actionCreators";

const SearchInput = (): JSX.Element => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="">
      <input
        className=""
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="type to search film"
      />

      <button
        className=""
        onClick={() => {
          dispatch(getSearchFilms(value));
        }}
      >
        search
      </button>
    </div>
  );
};

export default SearchInput;
