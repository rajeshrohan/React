import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./data/data"

function App() {
  return (
    <div className="App">
      <div className="heading">welcome to my Youtube channel</div>
      {videos.map(video =>
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
      <div style={{clear:'both'}}>  {/* disable float */}
      <PlayButton onSmash={()=>console.log('success playing')}>Play</PlayButton>
      <PlayButton onSmash={()=> alert('success paused')}>Pause</PlayButton>
      </div>
    </div>
  );
}
export default App;
