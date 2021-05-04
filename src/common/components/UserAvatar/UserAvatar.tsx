import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { colors } from 'utils/styles';

const useStyles = makeStyles({
  profile: {
    height: 35,
    width: 35,
    backgroundColor: colors.kaplanPurple,
    fontSize: 19,
  },
});

const UserAvatar = ({ user }) => {
  const { firstName, lastName } = { firstName: 'User', lastName: 'Test' };
  const classes = useStyles();
  return <Avatar className={classes.profile}>{firstName.charAt(0) + lastName.charAt(0)}</Avatar>;
};

export default UserAvatar;
