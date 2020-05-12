import React from "react";
import "./RightHeaderBlock.css";
import SearchField from "react-search-field";
// import { useTranslation } from "react-i18next";

const RightBlock = () => {
  // const { t, i18n } = useTranslation();
  // let handleClick = lang => {
  //   i18n.changeLanguage(lang)
  // };

  let users = [
    {
      name: "Leonard Rogers",
      email: "egestas@justonecante.org"
    },
    {
      name: "Walker Pace",
      email: "erat.eget.tincidunt@idsapienCras.org"
    },
    {
      name: "Lance Mcintyre",
      email: "Nam.ligula@quamvel.net"
    },
    {
      name: "Rudyard Conway",
      email: "sit@nunc.org"
    },
    {
      name: "Chadwick Oneal",
      email: "laoreet@dictum.edu"
    },
    {
      name: "Isaiah Kent",
      email: "diam.dictum@lobortisquam.co.uk"
    },
    {
      name: "Griffith Perkins",
      email: "congue@acfermentumvel.ca"
    },
    {
      name: "Lawrence Wheeler",
      email: "ac.libero@Duisac.org"
    },
    {
      name: "Preston Walker",
      email: "egestas.rhoncus@eudui.co.uk"
    },
    {
      name: "Simon Brewer",
      email: "nunc.sed@Fuscediamnunc.co.uk"
    }
  ];
  let onSearchClick = searchText => {};
  return (
    <div className="search-block">
      <div className="search-area">
        <div className="search-hover"></div>
        <div className="search">
          <SearchField
            placeholder="Search..."
            searchText="This is initial search text"
            classNames="test-class"
            onSearchClick={onSearchClick}
          />
        </div>
      </div>
      <div className="lang">
        <div className="langMain">
          <a href="#" onClick={e => e.preventDefault()}>
            <img src="./lRussia.png" alt="logo" />
          </a>

          <div className="langWraper">
            <a href="#" onClick={e => e.preventDefault()}>
              <img src="./lUkraine.png" alt="logo" />
            </a>
            <a href="#" onClick={e => e.preventDefault()}>
              <img src="./lEnglish.png" alt="logo" />
            </a>
            <a href="#" onClick={e => e.preventDefault()}>
              <img src="./lPoland.png" alt="logo" />
            </a>
          </div>
        </div>
        <div className="l-arrow"></div>
      </div>
    </div>
  );
};

export default RightBlock;
