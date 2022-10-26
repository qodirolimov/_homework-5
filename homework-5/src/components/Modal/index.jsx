import React, { useState, useEffect } from "react";
import "./modal.scss";
import { useParams, useNavigate } from "react-router-dom";

const index = () => {
  const [name1, setName1] = useState(null);
  const [load, setLoad] = useState(false);

  const { name } = useParams();

  const back = useNavigate();

  const fetchData = async (name) => {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);
    const result = await response.json();
    setName1(result);
    setLoad(true);
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return (
    <>
      {load ? (
        <>
          <div className="countries__modal">
            <button onClick={() => back(-1)} className="countries__modal__back">
              back
            </button>

            <div className="countries__modal__wrap__fourth">
              <img
                src={name1[0].flags.png}
                alt="countries_flags"
                className="countries__modal__wrap__fourth__image"
              />
            </div>

            <div className="data">
              <div className="countries__modal__wrap__first">
                <h2 className="countries__modal__wrap__first__title">
                  {name1[0].name}{" "}
                </h2>
                <p className="countries__modal__wrap__first__text__first">
                  Native Name: {name1[0].nativeName}{" "}
                </p>
                <p className="countries__modal__wrap__first__text__second">
                  Population: {name1[0].population}
                </p>
                <p className="countries__modal__wrap__first__text__third">
                  Region: {name1[0].region}
                </p>
                <p className="countries__modal__wrap__first__text__fourth">
                  Sub Region: {name1[0].subregion}
                </p>
                <p className="countries__modal__wrap__first__text__fifth">
                  Capital: {name1[0].capital}
                </p>
              </div>

              <div className="countries__modal__wrap__second">
                <p className="countries__modal__wrap__second__text__first">
                  Top Level Domain: {name1[0].topLevelDomain}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center text-danger">LOADING.....</h2>
        </>
      )}
    </>
  );
};

export default index;
