import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Skeleton from '@material-ui/lab/Skeleton';
import { Redirect, useHistory } from 'react-router-dom';
import useQueryString from 'utils/hooks/useQueryString';
import { routeTemplates } from 'utils/routes';
import classes from './PageWrapper.module.scss';

const PageWrapper = ({ title, isAuthenticated, isPrivate, component, layout }) => {
  const { location, match } = useHistory();
  const queryParams = useQueryString();
  const urlParams = match?.params || {};

  const buildComponent = (Component, Layout) => () => {
    const renderedComponent = <Component {...queryParams} {...urlParams} />;
    const renderedLayout = Layout ? (
      <Layout>
        <Suspense fallback={<Skeleton className={classes.componentSkeleton} variant='rect' />}>
          {renderedComponent}
        </Suspense>
      </Layout>
    ) : (
      renderedComponent
    );
    return renderedLayout;
  };

  const redirectToLogin = () => (
    <Redirect
      to={{ pathname: routeTemplates.auth.login, search: `?redirect=${location.pathname}` }}
    />
  );

  // const Component =
  //   isAuthenticated || !isPrivate ? buildComponent(component, layout) : redirectToLogin;
  const Component = buildComponent(component, layout);

  return (
    <>
      <Helmet title={title} />
      <div>Dfa</div>
      <Component />
    </>
  );
};

export default PageWrapper;
