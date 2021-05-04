import { colors, typography } from 'utils/styles';
import { getButtonHoverColor, getButtonFocusColor, getButtonOutline } from './utils';

const _buttons = (primary, secondary) => ({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: 'contained',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        minHeight: 36,
        height: 36,
        padding: '16px 30px 15px',
        fontSize: '11px',
        lineHeight: '15px',
        backgroundColor: colors.lightBlue10,
        //color: primary,

        '&:disabled': {
          boxShadow: 'none',
          backgroundColor: colors.black12p,
          color: colors.lightGray,
        },

        '&:hover': {
          backgroundColor: getButtonHoverColor(colors.lightBlue10),
        },

        '&:active': {
          backgroundColor: getButtonFocusColor(colors.lightBlue10),
        },

        '&:focus': {
          boxShadow: getButtonOutline(colors.deepCoolGray, '0.1rem'),
        },
      },
      containedPrimary: {
        backgroundColor: colors.lightRed,
        borderRadius: '4px',
        padding: '10px 14px',
        '&:hover': {
          backgroundColor: getButtonHoverColor(colors.lightRed),
        },
        '&:active': {
          backgroundColor: getButtonFocusColor(colors.lightRed),
        },
        '&:focus': {
          boxShadow: 'none !important',
        },
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: 'rgba(187, 134, 252, 0.04)',
          background: 'rgba(187, 134, 252, 0.04)',
        },
        '&:focus': {
          backgroundColor: 'rgba(187, 134, 252, 0.12)',
          background: 'rgba(187, 134, 252, 0.12)',
          boxShadow: '0 0 0 0rem #ED918E !important;',
          border: '1px solid #ED918E',
        },
        '&:active': {
          backgroundColor: 'rgba(187, 134, 252, 0.12)',
          background: 'rgba(187, 134, 252, 0.12)',
        },
        color: '#ED918E',
        backgroundColor: 'rgba(0,0,0,0)',
        border: '1px solid #ED918E',
        width: 175,
        padding: 0,
        fontSize: 16,
      },
      text: {
        fontFamily: 'inherit',
        fontWeight: typography.fontWeightNormal,
        textTransform: 'none',
        letterSpacing: 0,
        fontSize: 15,
        '&:focus': {
          boxShadow: getButtonOutline(colors.deepCoolGray, '0.1rem'),
        },
      },
    },
  },
});

export default _buttons;
