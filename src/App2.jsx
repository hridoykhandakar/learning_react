import "./App.css";

const video = {
  id: 1,
  thubnail: "link",
  title: "Top 10 Vscode extension",
  duration: 12.23,
  c_name: "dev ed",
  views: "14k",
  posted_on: "18 hourse ago",
  option: [
    {
      id: 1,
      name: "Add to queue",
      icon: "queue",
    },
    {
      id: 2,
      name: "Saved to Watch latter",
      icon: "watch leater",
    },
  ],
};

const navBar = {
  logo: "LOGO",
  top: {
    title: "ANALTYTICS",
    item: [
      {
        name: "Dashbord",
        icon: "db",
      },
      {
        name: "Performance",
        icon: "parformance",
      },
    ],
  },
  middle: {
    title: "CCONTENT",
    item: [
      {
        name: "GuideS",
        icon: "gd",
      },
      {
        name: "Hotspots",
        icon: "hotspots",
        notoifaction: 28,
      },
      {
        name: "Cheacklists",
        icon: "clist",
      },
      {
        name: "NPS",
        icon: "like",
      },
    ]
  },
  bottom: {
    title: "CUSTOMIZATION",
    item: [
      {
        name: "Segments",
        icon: "box",
        notoifaction: 24,
      },
      {
        name: "Themes",
        icon: "themes",
      },
    ],
  },
  
};

function App() {
  const btnStyle = {
    padding: ".3rem",
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card__top">
          <img src="" alt="Thumbnail" />
          <span className="time">{video.duration}</span>
        </div>
        <div className="card__main">
          <img src="" alt="avatar" className="avatar" />
          <h3 className="card__main-title">{video.title}</h3>
          {/* <span className="card__main-option">
            {video.option}
          </span> */}
        </div>
        <div className="card__bottom">
          <strong className="card__bottom-cname">{video.c_name}</strong>
          <div className="card__bottom-info">
            <span>{video.views}</span>
            <span>{video.posted_on}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
