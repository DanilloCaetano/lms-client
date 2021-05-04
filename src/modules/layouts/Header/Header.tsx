import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import UserAvatarMenu from 'common/components/UserAvatarMenu';
import { Skeleton } from '@material-ui/lab';
import { Hidden, IconButton, useMediaQuery, InputAdornment, Input } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { routeTemplates } from 'utils/routes';
import { dimensions } from 'utils/styles';
import classes from './Header.module.scss';
import SearchIcon from '@material-ui/icons/Search';

const Header = props => {
  const {
    user,
    logo,
    handleLogout,
    navOpen = false,
    handleOpenNavClick = () => {},
    loading = false,
    logoAlt = '',
    hideCatalog = false,
    navItems = [],
  } = props;
  const tabletView = useMediaQuery(`(max-width: ${dimensions.gridBreakpoints.desktop - 1}px)`);
  const displayX = navOpen && tabletView;
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRedirect, setSearchRedirect] = useState(false);

  const changeSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchRedirect(true);
  };

  return (
    <div
      className={classnames(classes.container, {
        [classes.navOpen]: navOpen,
      })}
    >
      <div>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleOpenNavClick}
          className={classes.navButton}
        >
          <FontAwesomeIcon icon={displayX ? faTimes : faBars} className={classes.hamburger} />
        </IconButton>
        {loading ? (
          <Skeleton className={classes.loading} variant='rect' width={200} height={46} />
        ) : (
          <Link to={routeTemplates.home}>
            <img src={logo} alt={logoAlt} className={classes.logo} />
          </Link>
        )}
      </div>
      <div className={classes.searchBar}>
        <Hidden mdDown>
          {loading ? (
            <Skeleton className={classes.loading} variant='rect' width={200} height={46} />
          ) : (
            <Input
              placeholder='Pesquisar'
              disableUnderline={true}
              className={classes.searchInput}
              onChange={changeSearch}
              endAdornment={
                <InputAdornment position='end'>
                  <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                </InputAdornment>
              }
            />
          )}
        </Hidden>
      </div>
      <div className={classes.avatar}>
        <UserAvatarMenu user={user} handleLogout={handleLogout} navItems={navItems} />
      </div>
      {searchRedirect ? (
        <Redirect
          push
          to={{
            pathname: routeTemplates.search,
            search: `?term=${searchTerm}`,
          }}
        />
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Header;
