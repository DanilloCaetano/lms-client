import { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useHistory } from 'react-router-dom';
import map from 'lodash/map';
import flatten from 'lodash/flatten';
import concat from 'lodash/concat';
import Skeleton from '@material-ui/lab/Skeleton';
import PageWrapper from 'common/pages/PageWrapper';
import myCourses from 'modules/myCourses';
import home from 'modules/home';
import course from 'modules/course';
import showAll from 'modules/showAll';
import search from 'modules/search';
import classes from './Routes.module.scss';

const FullLayout = lazy(
  () => import(/* webpackChunkName: "full-layout" */ './modules/layouts/FullLayout'),
);

const privateRoutes = flatten([home, myCourses, showAll, search, course]);

const Routes = ({ initialized = true, isAuthenticated }) => {
  const { action } = useHistory();

  useEffect(() => {
    if (action === 'PUSH' && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  });

  const routeMapper = (routes, layout, isPrivate) =>
    map(routes, ({ component, path, exact = false, metadata, ...props }) => (
      <Route
        {...props}
        exact={exact}
        key={path}
        path={path}
        render={() => (
          <PageWrapper
            {...metadata}
            isAuthenticated={isAuthenticated}
            isPrivate={isPrivate}
            layout={layout}
            component={component}
          />
        )}
      />
    ));

  const renderRoutes = () => {
    const routes = concat(
      // public routes should always come first
      // routeMapper(publicRoutes),
      routeMapper(privateRoutes, FullLayout, true),
    );
    return routes;
  };

  return (
    <Suspense
      fallback={
        <div className={classes.fullScreenWrapper}>
          <Skeleton height='100%' variant='rect' />
        </div>
      }
    >
      <Switch>{initialized && renderRoutes()}</Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  initialized: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

export default Routes;
