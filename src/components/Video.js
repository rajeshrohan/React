import "./Video.css";

function Video({ title, channel=" default channel", views, time, verified }) {

  return (
    <>
      <div className="container">
        <img
          className="img"
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUMGCNe2qDubR2f_Jyn2RfB3CP_eqTSViVJ7AWB_TEJKoGKLAi"
          alt="Alan Walker img"
        />
        <div className="title">{title}</div>
        {/* <div className="channel">{channel} {verified? '✅' : null}  </div> */}
        <div className="channel">{channel} {verified && '✅'}  </div>
        <div className="views">
          {views} views <span></span>
          {time}
        </div>
      </div>
    </>
  );
}
export default Video;
