import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data";

function App() {
  return (
    <div className="App" onClick={()=> console.log('APP')}>
      <div className="heading">welcome to my Youtube channel</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          verified={video.verified}
        >
          <PlayButton
            onPlay={() => console.log("video playing")}
            onPause={() => console.log("video paused")}
          >
            Play
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}
export default App;
