import classes from './ResourceCard.module.scss';
import { Typography, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faMap } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

const ResourceCard = ({ title, titleResource, resourceType, description, initializeResource }) => {
  const icon =
    resourceType === 'map'
      ? faMap
      : resourceType === 'video'
      ? faVideo
      : resourceType === 'podcast'
      ? faMicrophone
      : faMap;

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleWrapper}>
        <Typography variant='h4'>{title}</Typography>
      </div>

      <div
        className={classnames(
          classes.titleResourceWrapper,
          initializeResource ? classes.classViewed : classes.classNotViewed,
        )}
      >
        <Typography variant='h6'>
          {' '}
          <Link>
            <FontAwesomeIcon title='Loading' icon={icon} className={classes.icon} /> {resourceType}{' '}
            ({titleResource})
          </Link>
        </Typography>
      </div>

      <div className={initializeResource ? classes.classViewed : classes.classNotViewed}>
        <Typography variant='body1'>{description}</Typography>
      </div>
    </div>
  );
};

export default ResourceCard;
