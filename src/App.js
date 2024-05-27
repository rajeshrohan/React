import "./App.css";
import Video from "./components/Video";
import videos from "./data/data"

function App() {
  return (
    <div className="App">
      <div className="heading">welcome to my Youtube channel</div>
      <div>Videos</div>
      { videos.map(video =>
        <Video
        key = {video.id}
        id = {video.id}
        title= {video.title}
        channel= {video.channel}
        views= {video.views}
        time= {video.time}
        verified= {video.verified}
        ></Video>
        )
      }
    </div>
  );
}
export default App;
