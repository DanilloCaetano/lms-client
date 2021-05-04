import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import classnames from 'classnames';
import classes from './Footer.module.scss';

const Footer = ({ leftContent, rightContent, navOpen = false, loading = false }) => (
  <div
    className={classnames(classes.container, {
      [classes.navOpen]: navOpen,
    })}
  >
    {loading ? (
      <>
        <Skeleton variant='text' className={classes.loading} height={20} width={200} />
        <Skeleton variant='text' className={classes.loading} height={20} width={200} />
      </>
    ) : (
      <>
        <div className={classes.item}>{leftContent}</div>
        <div className={classes.item}>{rightContent}</div>
      </>
    )}
  </div>
);

Footer.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
  navOpen: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Footer;
