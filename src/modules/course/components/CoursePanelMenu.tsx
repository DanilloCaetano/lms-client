import { Typography } from '@material-ui/core';
import classes from './CoursePanelMenu.module.scss';

const CoursePanelMenu = ({ isContent, isMentalMap, isPodcast }) => {
  return (
    <div className={classes.menuWrapper}>
      <div className={classes.menuBody}>
        <div className={classes.menuContainer}>
          <div className={isContent ? classes.menuItemActive : classes.menuItem}>
            <Typography variant='h5'>Conteúdo</Typography>
          </div>
          <div className={isMentalMap ? classes.menuItemActive : classes.menuItem}>
            <Typography variant='h5'>Mapa Mental</Typography>
          </div>
          <div className={isPodcast ? classes.menuItemActive : classes.menuItem}>
            <Typography variant='h5'>Podcast</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePanelMenu;
