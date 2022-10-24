import React, { useContext, useState } from "react";
import "./section_first.scss";
import context from "../../context";
const index = () => {
  const { category, searchData, selectData } = useContext(context);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="section__first">
        <input
          type="text"
          className="section__first__input"
          placeholder="Search for a country…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (search.trim().length > 0) {
              searchData(search);
            }
          }}
        />
        <select
          className="section__first__select"
          onChange={(e) => {
            selectData(e.target.value);
          }}
        >
          <option disabled selected value={""}>
            Filter by Region
          </option>
          {category.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default index;
