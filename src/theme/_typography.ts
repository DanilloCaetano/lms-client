import { colors, typography } from 'utils/styles';

export default {
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    h1: {
      fontSize: '72px',
      lineHeight: '80px',
      fontWeight: 700,
    },
    h2: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: typography.fontWeightNormal,
    },
    h3: {
      fontSize: '38px',
      lineHeight: '44px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: typography.fontWeightNormal,
    },
    h5: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
      color: colors.lightGray,
    },
    h6: {
      fontSize: '22px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: '31px',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    // 'body1' is used in forms, we had to downsize this variant to 14px to match comps
    body1: {
      fontSize: '18px',
      lineHeight: '30px',
      fontWeight: typography.fontWeightNormal,
    },
    body2: {
      fontSize: '16px',
      lineHeight: '30px',
      fontWeight: typography.fontWeightNormal,
    },
    button: {
      fontFamily: 'inherit',
      fontWeight: typography.fontWeightBold,
      letterSpacing: '1.06px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      textAlign: 'center',
      color: colors.white,
    },
    overline: {
      fontSize: '11px',
      lineHeight: '15px',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        // Bump default level for accessibility
        subtitle1: 'h3',
      },
    },
  },
};
