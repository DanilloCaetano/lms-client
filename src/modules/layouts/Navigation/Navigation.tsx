import React, { useState } from 'react';
import { loader } from 'graphql.macro';
// import { useQuery } from '@apollo/client';
import classnames from 'classnames';
import map from 'lodash/map';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Drawer, Hidden, useMediaQuery } from '@material-ui/core';
import { UserAvatar } from 'common/components';
import { PrimaryButton } from 'common/components/Button';
import { faAngleRight, faStoreAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { colors } from 'utils/styles';
import { getNavHoverColor, formatColorValue } from 'theme/utils';
import classes from './Navigation.module.scss';

const Navigation = ({
  open = true,
  user = {},
  hideCatalog = false,
  loading = false,
  navItems,
  handleNavBarHover = (state: boolean) => {},
  onTransitionEnd,
  handleLogout,
}) => {
  // const { firstName, lastName } = user || { firstName: '', lastName: '' };
  const [openCatalog, setOpenCatalog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const { data } = useQuery(navigatablesQuery);

  const drawerStyles = {
    [classes.open]: open,
    [classes.closed]: !open,
  };

  const accent = colors.orangeCompliant;

  const useStyles = makeStyles({
    item: {
      color: `${colors.darkGray}`,
      '&:hover': {
        backgroundColor: getNavHoverColor(accent),
      },
    },
    active: {
      borderRight: `3px solid ${accent}`,
      color: `${accent}`,
      '& $icon': {
        color: `${accent}`,
      },
    },
    icon: {
      color: `${colors.doveGray}`,
    },
  });

  const branding = useStyles();

  const getPath = path => {
    if (typeof path === 'function') {
      return path(isMobile);
    }

    return path;
  };

  const makeRouteItem = item => {
    if (item.isDivider) {
      return <div className={classes.divider} />;
    }

    if (item.useAnchor) {
      return (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={item.path}
          className={classnames(classes.item, branding.item)}
        >
          <div className={classes.label}>{item.label}</div>
        </a>
      );
    }

    return (
      <NavLink
        exact={item.path === '/'}
        to={getPath(item.path)}
        activeClassName={classnames(classes.active, branding.active)}
        className={classnames(classes.item, branding.item)}
      >
        <div className={classes.label}>{item.label}</div>
      </NavLink>
    );
  };

  const renderNavItem = (item, idx) =>
    item.mobileOnly ? (
      <Hidden lgUp key={item.path || idx}>
        <li>{makeRouteItem(item)}</li>
      </Hidden>
    ) : (
      <li key={item.path || idx}>{makeRouteItem(item)}</li>
    );

  return (
    <Drawer
      onTransitionEnd={onTransitionEnd}
      className={classnames(classes.container, drawerStyles)}
      classes={{
        paper: classnames(drawerStyles),
        paperAnchorLeft: classes.anchorLeft,
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.navHeader}>
          <div className={classes.avatar}>
            <UserAvatar user={user} />
          </div>
          <div className={classes.name}>User Test</div>
        </div>
      </div>
      <div role='navigation'>
        <ul className={classes.navList}>
          {map(navItems, (item, idx) => renderNavItem(item, idx))}
        </ul>
        {!loading && !hideCatalog && (
          <div
            role='button'
            tabIndex={0}
            className={classes.browseCatalog}
            onClick={() => setOpenCatalog(true)}
            onKeyDown={ev => {
              if (ev.key === 'ArrowRight') {
                setOpenCatalog(true);
              }
            }}
          >
            <FontAwesomeIcon className={classes.icon} icon={faStoreAlt} />
            <div className={classes.label}>Browse Catalog</div>
            <FontAwesomeIcon className={classes.angleIcon} icon={faAngleRight} />
          </div>
        )}
        <div className={classes.navLogout}>
          <PrimaryButton onClick={handleLogout} className={classes.logoutBtn}>
            Sign out
          </PrimaryButton>
        </div>
      </div>
    </Drawer>
  );
};

export default Navigation;
