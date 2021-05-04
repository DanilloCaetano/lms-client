import { colors, typography, dimensions } from 'utils/styles';

export default function tabs(primary) {
  return {
    props: {
      MuiTabs: {
        indicatorColor: 'primary',
        variant: 'scrollable',
      },
    },
    overrides: {
      MuiTab: {
        root: {
          textTransform: 'none',
          padding: '6px 20px',
          fontWeight: typography.fontWeightNormal,
          color: colors.darkGray,
          letterSpacing: 0,

          [`@media (min-width: ${dimensions.gridBreakpoints.mobile}px)`]: {
            minWidth: 0,
          },

          '&:hover': {
            backgroundColor: colors.lightBlue10,
            textDecoration: 'none',
          },

          '&$selected': {
            color: primary,
          },

          '&$disabled': {
            color: colors.deepCoolGray,
          },
        },
        textColorInherit: {
          opacity: 1,

          '&$disabled': {
            opacity: 1,
          },
        },
      },
    },
  };
}
