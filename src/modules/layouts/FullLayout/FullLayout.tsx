import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from 'modules/layouts/Header';
import Navigation from 'modules/layouts/Navigation';
import Footer from 'modules/layouts/Footer';
import { sideNavItems, avatarNavItems } from './navItems';
import classes from './FullLayout.module.scss';

const FullLayout = ({ children }) => {
  const [navOpen, setOpen] = useState(false);
  const [navHover, setHover] = useState(false);
  const navEnabled = navHover || navOpen;
  const [navItems, setNavItems] = useState(sideNavItems);

  const handleOpenNavClick = () => {
    setOpen(!navOpen);
    setHover(!navOpen);
  };

  return (
    <div className={classnames(classes.container, { [classes.navOpen]: navEnabled })}>
      <Header
        logo='https://i.ibb.co/Lv2Kqkk/Frame-10.png'
        logoAlt='logo'
        navOpen={navEnabled}
        handleOpenNavClick={handleOpenNavClick}
        handleLogout={() => console.log('logged out')}
        navItems={avatarNavItems}
      />
      <div className={classes.body}>
        <Navigation
          navItems={navItems}
          open={navEnabled}
          onTransitionEnd={() => {
            console.log('transition end');
          }}
          handleNavBarHover={setHover}
          handleLogout={() => console.log('logout')}
        />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

FullLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FullLayout;
