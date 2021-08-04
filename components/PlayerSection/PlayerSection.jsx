import ReactPlayer from 'react-player';

import classes from './PlayerSection.module.css';

const PlayerSection = () => {
  return (
    <div className="container mx-auto">
      <div className={classes.wrapper}>
        <div className={classes.player}>
          <video
            controls
            poster="https://knox.armymwr.com/application/files/8516/2456/3893/knox-rds-100milebike.jpg"
          >
            <source
              src="https://akijmotors.com/download/akijmotors-tvc-2021.mp4"
              type="video/mp4"
            ></source>
          </video>
          {/* <ReactPlayer
            url="http://media.w3.org/2010/05/bunny/trailer.mp4"
            className="react-player"
            width="100%"
            height="100%"
            controls={false}
          /> */}
        </div>

        <p>
          AKIJ MOTORS, one of the biggest auto mobile companies in Bangladesh.
          It has been working since 2016 with trust & reputation. Akij Motors
          solely believe in total customer satisfaction with "Trust & Mutual
          Benifit". The mission is to
        </p>
      </div>
    </div>
  );
};

export default PlayerSection;
