import merge from 'lodash/merge';
import { createMuiTheme } from '@material-ui/core/styles';
import { colors, shadows, dimensions, typography as sassTypography } from 'utils/styles';
import alert from './_alert';
import buttons from './_buttons';
import forms from './_forms';
import snackbar from './_snackbar';
import tabs from './_tabs';
import typography from './_typography';

const misc = (primary, secondary) => ({
  palette: {
    // primary: {
    //   main: primary,
    //   dark: primary,
    // },
    // secondary: {
    //   main: secondary,
    //   dark: secondary,
    // },
    action: {
      hover: colors.lightBlue10,
      selected: colors.mystic,
    },
    error: {
      main: colors.red,
    },
    success: {
      main: colors.green,
    },
    warning: {
      main: colors.yellow,
    },
  },
  props: {
    MuiCard: {
      variant: 'outlined',
    },
    MuiList: {
      disablePadding: true,
    },
  },
  breakpoints: {
    values: {
      xs: dimensions.gridBreakpoints.xs,
      sm: dimensions.gridBreakpoints.mobile,
      md: dimensions.gridBreakpoints.tablet,
      lg: dimensions.gridBreakpoints.desktop,
      xl: dimensions.gridBreakpoints.xl,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212',
        backgroundColor: 'none',
      },
      elevation1: {
        boxShadow: shadows.defaultShadow,
      },
      elevation2: {
        boxShadow: shadows.cardShadow,
      },
      outlined: {
        border: `1px solid ${colors.coolGray}`,
      },
    },
    MuiCard: {
      root: {
        margin: dimensions.cardMargin,
        color: colors.white,
        lineHeight: dimensions.cardLineHeight,
        fontSize: sassTypography.cardFontSize,
      },
    },
    MuiCardHeader: {
      root: {
        padding: dimensions.cardPadding,
      },
    },
    MuiCardContent: {
      root: {
        padding: dimensions.cardPadding,
        '&:last-child': {
          paddingBottom: dimensions.cardPaddingVertical,
        },
        [`@media (max-width: ${dimensions.gridBreakpoints.mobile}px)`]: {
          paddingLeft: dimensions.cardPaddingMobile,
          paddingRight: dimensions.cardPaddingMobile,
        },
      },
    },
    MuiDialog: {
      root: {
        background: 'rgba(0,0,0,0.75)',
      },
      paper: {
        boxShadow: shadows.invisibleShadow,
      },
    },
  },
});

export default (primary, secondary) =>
  createMuiTheme(
    merge(
      {
        palette: {
          type: 'dark',
        },
      },
      alert,
      buttons(primary, secondary),
      tabs(primary),
      forms,
      snackbar,
      typography,
      misc(primary, secondary),
    ),
  );
