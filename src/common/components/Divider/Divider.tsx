import classes from './Divider.module.scss';

const Divider = props => {
  return (
    <div
      className={classes.divider}
      style={props ? { marginTop: props.marginTop, marginBottom: props.marginBottom } : {}}
    />
  );
};

export default Divider;
