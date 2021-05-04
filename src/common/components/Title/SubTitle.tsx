import classes from './SubTitle.module.scss';
import { Typography } from '@material-ui/core';

const SubTitle = ({ children }) => {
  return (
    <Typography variant='h6' className={classes.subTitle}>
      {children}
    </Typography>
  );
};

export default SubTitle;
