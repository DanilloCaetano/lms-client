import { Link, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faMap, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './ClassIconButton.module.scss';

const ClassIconButton = props => {
  const defineElement = () => {
    if (props.isVideo) {
      return (
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faVideo} className={classes.icon} />
          <Typography variant='subtitle1'>Video</Typography>
        </div>
      );
    }

    if (props.isMentalMap) {
      return (
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faMap} className={classes.icon} />
          <Typography variant='subtitle1'>Mapa Mental</Typography>
        </div>
      );
    }

    if (props.isPodcast) {
      return (
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faMicrophone} className={classes.icon} />
          <Typography variant='subtitle1'>podcast</Typography>
        </div>
      );
    }

    if (props.isQuiz) {
      return (
        <div className={classes.iconWrapper}>
          <FontAwesomeIcon icon={faQuestionCircle} className={classes.icon} />
          <Typography variant='subtitle1'>Quiz</Typography>
        </div>
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      <Link href={props.url} variant={'subtitle1'}>
        {defineElement()}
      </Link>
    </div>
  );
};

export default ClassIconButton;
