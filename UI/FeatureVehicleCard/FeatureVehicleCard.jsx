import Image from 'next/image';
import classes from './FeatureVehicleCard.module.css';

const FeatureVehicleCard = (props) => {
  return (
    <div className={classes.featured__card}>
      <img src={props.img} alt="featured image" height="200px" width="100%" />
      <div className={classes.featured__card__title}>{props.title}</div>
    </div>
  );
};

export default FeatureVehicleCard;
