import "./PlayButton.css";
function PlayButton({children, onSmash }) {
  function handleClick() {
    onSmash();
  }
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
export default PlayButton;
