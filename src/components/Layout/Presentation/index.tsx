import PresentationVideo from 'assets/img/Presentation.mp4';
import './_presentation.css';

const Presentation: () => JSX.Element = () => {
  return (
    <video
      className='video-presentation'
      src={PresentationVideo}
      muted
      loop
      autoPlay
      playsInline
    />
  );
};

export default Presentation;
