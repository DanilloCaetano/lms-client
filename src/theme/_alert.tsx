import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from 'utils/styles';

export default {
  props: {
    MuiAlert: {
      iconMapping: {
        error: <FontAwesomeIcon icon={faTimesCircle} />,
        success: <FontAwesomeIcon icon={faCheckCircle} />,
        warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
      },
    },
  },
  overrides: {
    MuiAlert: {
      root: {
        lineHeight: '15px',
        fontSize: 11,
        borderLeft: '3px solid transparent',
        borderRadius: '3px',
      },
      standardSuccess: {
        backgroundColor: colors.green10p,
        borderLeftColor: colors.green,
      },
      standardError: {
        backgroundColor: colors.red10p,
        borderLeftColor: colors.red,
      },
      standardWarning: {
        backgroundColor: colors.yellow10p,
        borderLeftColor: colors.yellow,
      },
      message: {
        color: colors.darkGray,
      },
      icon: {
        fontSize: '18px',
      },
    },
    MuiAlertTitle: {
      root: {
        marginBottom: '9px',
        fontWeight: 'bold',
        fontSize: 11,
      },
    },
  },
};
