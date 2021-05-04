import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loader } from 'graphql.macro';
// import { useQuery } from '@apollo/client';
import get from 'lodash/get';
import { Link } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

import { TextButton } from 'common/components/Button';
import UserAvatar from 'common/components/UserAvatar';
import { colors } from 'utils/styles';
import classes from './UserAvatarMenu.module.scss';

// const navigatablesQuery = loader('modules/graphql/navigatables.graphql');

const useStyles = makeStyles({
  backdrop: {
    backgroundColor: colors.black7p,
    zIndex: 1,
  },
  iconButton: {
    paddingLeft: 12,
    paddingRight: 0,
  },
  TextButton: {
    justifyContent: 'left',
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
    padding: '5px 20px',
  },
});

const UserAvatarMenu = ({ user, handleLogout, navItems }) => {
  const [toggle, setToggle] = useState(false);
  const styles = useStyles();

  function changeToggle() {
    setToggle(!toggle);
  }

  const renderNavItem = (item, idx) => {
    if (item.isDivider) {
      return <div key={idx} className={classes.divider} />;
    }

    return (
      <Link key={item.path} to={item.path} className={classes.navLink}>
        <FontAwesomeIcon icon={item.icon} className={classes.itemIcon} />
        {item.label}
      </Link>
    );
  };

  const dropdown = toggle && (
    <div className={classes.dropdown}>
      {navItems?.map(renderNavItem)}
      {!!navItems?.length && <div className={classes.divider} />}
      <TextButton className={styles.TextButton} onClick={handleLogout}>
        Sign out
      </TextButton>
    </div>
  );

  return (
    <div className={classes.profileContainer}>
      <IconButton
        color='inherit'
        aria-label='User Navigation'
        onClick={() => changeToggle()}
        className={styles.iconButton}
      >
        <UserAvatar user={user} />
        <FontAwesomeIcon icon={faChevronDown} className={classes.arrowDown} />
      </IconButton>
      <Backdrop open={toggle} onClick={changeToggle} className={styles.backdrop} />
      {dropdown}
    </div>
  );
};

export default UserAvatarMenu;
