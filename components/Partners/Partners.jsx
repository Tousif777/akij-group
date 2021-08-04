import Image from 'next/image';
import Card from '../../UI/Card/Card';
import classes from './Partners.module.css';

const Partners = () => {
  return (
    <div className="container mx-auto my-8 ">
      <Card>
        <div className={classes.partners}>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <Image
              key={i}
              width="100%"
              height="100px"
              src={`/brand/brand-${item}.png`}
              alt="partner"
              objectFit="contain"
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Partners;
