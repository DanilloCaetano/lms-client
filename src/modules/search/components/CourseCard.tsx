import { Typography, Button } from '@material-ui/core';
import classes from './CourseCard.module.scss';

const CourseCard = ({ title, img }) => {
  const imgElement = () => {
    if (img) {
      return (
        <div
          style={{
            width: 248,
            height: 132,
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .8)), url(${img})`,
            backgroundPosition: 'center',
          }}
        />
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.imgContainer}>
        {imgElement()}
        <Typography variant='h4'>{title}</Typography>
      </div>
      <Button variant='contained' color='secondary' className={classes.button}>
        Acessar curso
      </Button>
    </div>
  );
};

export default CourseCard;
