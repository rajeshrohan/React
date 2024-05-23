import './Video.css'

function Video() {
  let topic = "Alan Walker";
  let description = "this song is produced and created by Alan Walker";
  let bg = "dark";
  return (
    <>
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUMGCNe2qDubR2f_Jyn2RfB3CP_eqTSViVJ7AWB_TEJKoGKLAi"
        alt="Alan Walker img"
      />

      <div style={{ backgroundColor: "red", textAlign: "center" }}>
        this is {topic} video component
      </div>

      <div className={bg}>{description}</div>
    </>
  );
}
export default Video;
