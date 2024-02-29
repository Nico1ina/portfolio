import Videobg from "@/public/IMG_3352.mp4";

function VideoPlayer() {
  return (
    <video width="320" height="240" controls>
      <source src="Videobg" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
