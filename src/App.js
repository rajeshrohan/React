import "./App.css";
import Video from "./components/Video";

function App() {
  let obj = {
    title: "Alan walker 3",
    channel: "Tseries",
    views: "30 million",
    time: "3 year ago",
    verified: "true"
  };

  return (
    <div className="App">
      <div className="heading">welcome to my Youtube channel</div>
      <Video
        title="Alan walker 1"
        channel="Tseries"
        views="10 million"
        time="1 year ago"
        verified = "true"
      />
      <Video
        title="Alan walker 2"
        // channel="Tseries" default
        views="5 million"
        time="6 months ago"
        verified = {false}
      />
      <Video {...obj} />
    </div>
  );
}
export default App;
