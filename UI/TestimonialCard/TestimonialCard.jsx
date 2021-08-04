import Image from 'next/image';
import { CgQuote } from 'react-icons/cg';
import classes from './TestimonialCard.module.css';

const TestimonialCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.profile__pic}>
        <img src={props.img} alt="profile" />
      </div>
      <div className={classes.content}>
        <h1 className={classes.name}>{props.name}</h1>
        <h5 className={classes.destination}>{props.destination}</h5>
        <div className={`${classes.icon} mx-auto`}>
          <CgQuote color="#fff" />
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
