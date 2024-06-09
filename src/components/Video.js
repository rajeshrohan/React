import { Children } from "react";
import "./Video.css";

function Video({ id, title, channel, views, time, verified, children }) {
  return (
    <>
      <div className="container">

        <img
          className="img"
          src={`https://picsum.photos/id/${id}/200/300`}
          alt="img"
        />
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified ? "✅" : null}{" "}
        </div>

        <div className="views">
          {views} views <span></span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
export default Video;
