import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { styled } from '@material-ui/core/styles';
import { Button as MuiButton, Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {
  getButtonHoverColor,
  getButtonFocusColor,
  getButtonOutline,
  formatColorValue,
} from 'theme/utils';
import { colors } from 'utils/styles';
import classes from './Button.module.scss';

const SpinnerIcon = <FontAwesomeIcon title='Loading' icon={faSpinner} spin />;

const DefaultButton = ({ children, className, loading = false, color, variant, ...props }) => {
  let buttonProps = {};
  const labelProps = {};
  const isDefault = !color && !variant;

  // If a button is being used as a loading indicator, add accessibility-related attributes
  if (loading !== undefined) {
    labelProps['aria-hidden'] = loading;
  }

  // Prevent users from focusing on buttons in loading state
  if (loading === true) {
    buttonProps['tabIndex'] = -1;
  }

  return (
    <MuiButton
      variant={variant || 'contained'}
      disableElevation
      className={classnames([
        className,
        classes.root,
        {
          [classes.loading]: loading,
          [classes.default]: isDefault,
          [classes.text]: variant === 'text',
        },
      ])}
      color={color}
      {...buttonProps}
      {...props}
    >
      <span className={classes.text} {...labelProps}>
        {children}
      </span>
      {loading && <span className={classes.icon}>{SpinnerIcon}</span>}
    </MuiButton>
  );
};
const TextButton = props => <DefaultButton variant='text' {...props} />;

const PrimaryButton = props => <DefaultButton color='primary' {...props} />;
const SecondaryButton = props => <DefaultButton color='secondary' {...props} />;
const AccentButton = props => {
  const accent = colors.orangeCompliant;

  const accentStyles = {
    backgroundColor: accent,
    '&:hover': {
      background: getButtonHoverColor(accent),
    },
    '&:active': {
      background: getButtonFocusColor(accent),
    },
    '&:focus': {
      boxShadow: getButtonOutline(accent),
    },
  };
  const StyledDefaultButton = styled(DefaultButton)(accentStyles);

  return <StyledDefaultButton color='primary' {...props} />;
};

// Accessibility - If a link doesn’t have a meaningful href, it should be rendered using a <button> element
const LinkButton = props => (
  <Link
    component='button'
    classes={{
      root: classes.link,
    }}
    {...props}
  />
);

export { DefaultButton, TextButton, PrimaryButton, SecondaryButton, AccentButton, LinkButton };
