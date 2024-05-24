import "./App.css";
import Video from "./components/Video";
function App() {
  let obj = {
    title: "Alan walker 3",
    channel: "Tseries",
    views: "30 million",
    time: "3 year ago",
  };

  return (
    <div className="App">
      <div className="heading">welcome to my Youtube channel</div>
      <Video
        title="Alan walker 1"
        channel="Tseries"
        views="10 million"
        time="1 year ago"
      />
      <Video
        title="Alan walker 2"
        // channel="Tseries" default
        views="5 million"
        time="6 months ago"
      />
      <Video
        {...obj}
      />
    </div>
  );
}
export default App;
