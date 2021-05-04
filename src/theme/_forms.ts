import { Height } from '@material-ui/icons';
import { NONAME } from 'node:dns';
import { colors, typography } from 'utils/styles';

export default {
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiRadio: {
      color: 'primary',
    },
  },
  overrides: {
    // Update the color of unchecked radio and checkbox inputs
    MuiCheckbox: {
      colorPrimary: {
        color: colors.deepCoolGray,
      },
    },
    MuiRadio: {
      colorPrimary: {
        color: colors.deepCoolGray,
      },
    },
    MuiLink: {
      root: {
        color: '#ED918E',
        fontWeight: 700,
        fontSize: 16,
        cursor: 'pointer',
        textTransform: 'uppercase',

        '&:hover': {
          textDecorarion: 'none !important',
        },
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: '#441e1e',
      },
      barColorPrimary: {
        backgroundColor: '#E34642',
      },
    },
    MuiInput: {
      input: {
        background: '#2c2c2c',
        color: '#fff',
      },
      root: {
        background: '#2c2c2c',
      },
      underline: {
        '&:before': {
          borderBottomColor: colors.coolGray,
        },
      },
    },
    MuiFormControlLabel: {
      label: {
        fontSize: 14,
      },
    },
    MuiInputLabel: {
      root: {
        '&$shrink': {
          color: colors.darkGray,
          fontWeight: typography.fontWeightSemibold,
          // Update the transform property to set shrunk label to 11px
          transform: 'translate(0, 1.5px) scale(0.79)',
        },
        '&$disabled': {
          color: colors.deepCoolGray,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        color: colors.doveGray,
      },
    },
    MuiAccordionSummary: {
      expanded: {},
      root: {
        minHeight: 128,
        '&$expanded': {
          minHeight: 128,
        },
      },
    },
    MuiAccordion: {
      root: {
        borderBottom: '1px solid #8B8B8B',
        background: 'transparent',
        boxShadow: 'none',
        minHeight: 128,
        '&:last-child': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
        '&$expanded': {
          margin: 'auto',
          background: colors.darknessGray,
        },
      },
      expanded: {},
    },
  },
  MuiAccordionDetails: {
    root: {
      minHeight: 150,
    },
  },
};
