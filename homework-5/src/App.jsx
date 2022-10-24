import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Section_first from "./components/Section_first";
import context from "./context";
import Loading from "./components/UI/Loader";
import Card from "./components/UI/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import language from "./lang/language";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [lang, setLang] = useState("eng");
  const [loading, setLoading] = useState(false);

  async function getAllData() {
    const response = await fetch(baseURL);
    const result = await response.json();
    setData(result);
    setLoading(true);
  }

  const baseURL = "https://restcountries.com/v2/all";
  const searchURL = "https://restcountries.com/v2/name";
  const selectURL = "https://restcountries.com/v2/region";

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(8);

  const firstPage = currentPage * totalPage;
  const lastPage = firstPage - totalPage;

  const lastData = data.slice(lastPage, firstPage);

  const selectData = async (text2) => {
    const response = await fetch(`${selectURL}/${text2}`);
    const result = await response.json();
    setData(result);
  };

  const searchData = async (text) => {
    const response = await fetch(`${searchURL}/${text}`);
    const result = await response.json();
    if (result.status === 404) {
      setTimeout(() => {
        toast.error("404 NOT FOUND");
      }, 2000);
    } else {
      setData(result);

      setTimeout(() => {
        toast.success("Successfuly");
      }, 2000);
    }
  };

  data.forEach((e) => {
    if (!category.includes(e.region)) {
      setCategory(category.push(e.region));
    }
  });

  useEffect(() => {
    getAllData();
    
  }, []);

  const paginate = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <context.Provider
        value={{
          category,
          searchData,
          selectData,
          language,
          lang,
          data,
          totalPage,
          paginate,
        }}
      >
        <Navbar data={language} lang={lang} setlang={setLang} />
        <Section_first />
        <main>
          <div className="main_container">
            <div className="section__second">
              {loading ? (
                lastData.map((item) => {
                  return <Card key={item.name} data={item} />;
                })
              ) : (
                <Loading />
              )}
            </div>
            <Pagination />
          </div>
        </main>
      </context.Provider>
      <ToastContainer />
    </>
  );
};
export default App;
