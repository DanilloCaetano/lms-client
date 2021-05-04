import { Typography, LinearProgress } from '@material-ui/core';
import classes from './ClassCard.module.scss';
import ClassIconButton from '../Button/ClassIconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { spawn } from 'node:child_process';
import classnames from 'classnames';

const ClassCard = ({ title = '', module, img, className, finishedVideo, intializeVideo }) => {
  return (
    <div>
      {title ? (
        <Typography variant='h4'>
          {title} | {module}
        </Typography>
      ) : (
        <span></span>
      )}
      <div className={classes.wrapperContent}>
        <div
          style={{
            width: 257,
            height: 136,
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(7, 7, 7, 0.8) 100%), url(${img})`,
            backgroundPosition: 'center',
          }}
          className={classes.img}
        >
          {finishedVideo ? (
            <div className={classes.checkVideoWrapper}>
              <div className={classes.iconCheck}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
            </div>
          ) : (
            <span></span>
          )}
          <div className={classes.hoverVideoWrapper}>
            <div className={classes.iconPlay}>
              <FontAwesomeIcon icon={faPlayCircle} />
            </div>
            {intializeVideo ? (
              <div className={classes.progress}>
                <LinearProgress
                  value={45}
                  valueBuffer={100}
                  variant='determinate'
                  style={{ width: 224 }}
                />
              </div>
            ) : (
              <span></span>
            )}

            {!finishedVideo ? (
              <div className={classes.videoTime}>
                <Typography variant='caption'>20:04</Typography>
              </div>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div>
          {intializeVideo ? (
            <Typography variant='h5' className={classes.classViewed}>
              {className}
            </Typography>
          ) : (
            <Typography variant='h5' className={classes.classNotViewed}>
              {className}
            </Typography>
          )}
          <div
            className={classnames(
              classes.icons,
              intializeVideo ? classes.classViewed : classes.classNotViewed,
            )}
          >
            <ClassIconButton isVideo />
            <ClassIconButton isPodcast />
            <ClassIconButton isMentalMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
