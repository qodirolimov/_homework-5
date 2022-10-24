import React from "react";
import "./navbar.scss";
const index = ({ data, lang, setlang }) => {
  const t = data[lang];

  return (
    <>
      <header>
        <div className="header__container">
          <nav className="nav">
            <h1 className="nav__title">{t.title}</h1>
            <ul className="navbar-nav">
              {/* <!-- Icon dropdown --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="flag-uzbekistan flag m-0"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => setlang("uz")}
                    >
                      <i className="flag-uzbekistan flag"></i>Uzbek
                      <i className="fa fa-check text-success ms-2"></i>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => setlang("eng")}
                    >
                      <i className="flag-united-kingdom flag"></i>English
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => setlang("ru")}
                    >
                      <i className="flag-russia flag"></i>Русский
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="nav__text">{t.navbarText}</p>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
