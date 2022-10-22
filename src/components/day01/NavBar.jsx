import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGauge,
  faImage,
  faStickyNote,
  faRotateRight,
  faShield,
  faThumbsUp,
  faSearch,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
const navBar = {
  logo: faCoffee,
  top: {
    title: "ANALTYTICS",
    item: [
      {
        id: "aitem01",
        name: "Dashbord",
        icon: faGauge,
      },
      {
        id: "aitem02",
        name: "Performance",
        icon: faImage,
      },
    ],
  },
  middle: {
    title: "CCONTENT",
    item: [
      {
        id: "citem01",
        name: "GuideS",
        icon: faStickyNote,
      },
      {
        id: "citem02",
        name: "Hotspots",
        icon: faRotateRight,
        notoifaction: 28,
      },
      {
        id: "citem03",
        name: "Cheacklists",
        icon: faShield,
      },
      {
        id: "citem04",
        name: "NPS",
        icon: faThumbsUp,
      },
    ],
  },
  bottom: {
    title: "CUSTOMIZATION",
    item: [
      {
        id: "cuitem01",
        name: "Segments",
        icon: faSearch,
        notoifaction: 24,
      },
      {
        id: "cuitem02",
        name: "Themes",
        icon: faBox,
      },
    ],
  },
};

const NavBar = () => {
  return (
    <header className="nav">
      <a href="#" className="nav__logo">
        <FontAwesomeIcon icon={navBar.logo} />
      </a>

      <div className="top">
        <span className="title">{navBar.top.title}</span>
        <ul className="nav__list">
          {navBar.top.item.map((i) => (
            <li key={i.id} className="nav__item">
              <a href="#" className="nav__linsk">
                <FontAwesomeIcon icon={i.icon} />
                <span>{i.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="middle">
        <span className="title">{navBar.middle.title}</span>
        <ul className="nav__list">
          {navBar.middle.item.map((i) => (
            <li key={i.id} className="nav__item">
              <a href="#" className="nav__linsk">
                <FontAwesomeIcon icon={i.icon} />
                <span>{i.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <span className="title">{navBar.bottom.title}</span>
        <ul className="nav__list">
          {navBar.bottom.item.map((i) => (
            <li key={i.id} className="nav__item">
              <a href="#" className="nav__linsk">
                <FontAwesomeIcon icon={i.icon} />
                <span>{i.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default NavBar;
