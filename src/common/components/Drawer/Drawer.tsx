import classnames from 'classnames';
import omit from 'lodash/omit';
import MuiDrawer from '@material-ui/core/Drawer';
import MuiButton from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import classes from './Drawer.module.scss';

const Drawer = props => {
  const { onClose, children, className, large = false } = props;

  // Remove the props we are manually adding and pass all remaining directly to MuiDrawer
  const drawerProps = omit(props, [
    'anchor',
    'className',
    'ModalProps',
    'classes',
    'children',
    'large',
  ]);

  const paperClass = [classes.paper, className];

  if (large) {
    paperClass.push(classes.large);
  }

  return (
    <MuiDrawer
      className={classes.drawer}
      anchor='right'
      ModalProps={{
        onBackdropClick: onClose,
        BackdropProps: { classes: { root: classes.backdrop } },
      }}
      classes={{
        paper: classnames(paperClass),
      }}
      {...drawerProps}
    >
      <Hidden smDown>
        <MuiButton className={classnames(classes.closeButton, classes.backdrop)} onClick={onClose}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </MuiButton>
      </Hidden>
      <div className={classes.container}>{children}</div>
    </MuiDrawer>
  );
};

export default Drawer;
