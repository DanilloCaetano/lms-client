import mapValues from 'lodash/mapValues';
import colors from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_colors.scss';
import dimensions from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_dimensions.scss';
import shadows from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_shadows.scss';
import typography from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_typography.scss';

if (dimensions?.gridBreakpoints) {
  dimensions.gridBreakpoints = mapValues(dimensions.gridBreakpoints, value => parseInt(value, 10));
}

export { colors, dimensions, shadows, typography };
