import { dimensions } from 'utils/styles';

export default {
  props: {
    MuiSnackbar: {
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      autoHideDuration: 5000,
    },
  },
  overrides: {
    MuiSnackbar: {
      anchorOriginBottomLeft: {
        bottom: '53px',
        [`@media (min-width: ${dimensions.gridBreakpoints.mobile}px)`]: {
          left: '20px',
          bottom: '80px',
        },
      },
    },
  },
};
