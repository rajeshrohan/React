import "./PlayButton.css";
function PlayButton({ children, onPlay, onPause }) {
  let flag = true;
  function handleClick(e) {
    console.log(e);
    e.stopPropagation();
    if(flag)
        onPlay();
    else
        onPause();
    flag = !flag;
  }
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
export default PlayButton;
