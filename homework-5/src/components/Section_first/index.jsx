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
            if (e.target.value === "Asia") {
              selectData("Asia");
            }
            if (e.target.value === "Europe") {
              selectData("Europe");
            }
            if (e.target.value === "Africa") {
              selectData("Africa");
            }
            if (e.target.value === "Oceania") {
              selectData("Oceania");
            }
            if (e.target.value === "Americas") {
              selectData("Americas");
            }

            if (e.target.value === "Polar") {
              selectData("Polar");
            }
            if (e.target.value === "Antarctic") {
              selectData("Antarctic");
            }

            if (e.target.value === "Antarctic Ocean") {
              selectData("Antarctic Ocean");
            }
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
