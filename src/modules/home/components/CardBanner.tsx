import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import classes from './CardBanner.module.scss';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const CardBanner = ({ logoImg, withProgress, img, title, marginR, width, height, font }) => {
  const [typographyTitle, setTypographyTitle] = useState(
    <Typography variant='h4' className={classes.title} style={{ maxWidth: width }}>
      {title}
    </Typography>,
  );
  useEffect(() => {
    defineTypography();
  }, []);

  const logo = () => {
    if (logoImg) {
      if (font === 'min') {
        return (
          <div className={classes.logoMin}>
            <img src={logoImg} />
          </div>
        );
      }
      return (
        <div className={classes.logo}>
          <img src={logoImg} />
        </div>
      );
    }
  };

  const defineTypography = () => {
    if (font === 'min') {
      setTypographyTitle(
        <div className={classes.titleMin}>
          <Typography variant='h5' style={{ maxWidth: width }}>
            {title}
          </Typography>
        </div>,
      );
    } else {
      setTypographyTitle(
        <Typography variant='h4' className={classes.title} style={{ maxWidth: width }}>
          {title}
        </Typography>,
      );
    }
  };

  const progress = () => {
    if (withProgress) {
      return (
        <div style={{ marginTop: 13 }}>
          <LinearProgress
            value={45}
            valueBuffer={100}
            variant='determinate'
            style={{ width: 217, borderRadius: 12 }}
          />
        </div>
      );
    }
  };

  return (
    <div className={classes.cardWrapper}>
      <div
        className={classes.card}
        style={{
          width: width,
          height: height,
          marginRight: marginR,
          backgroundImage: `linear-gradient(180deg, rgba(105, 105, 105, 0.1) 0%, #070707 100%), url(${img})`,
        }}
      >
        {logo()}
        {typographyTitle}
      </div>
      {progress()}
    </div>
  );
};

export default CardBanner;
