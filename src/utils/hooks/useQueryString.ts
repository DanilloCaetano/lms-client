import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default () => {
  const { search } = useLocation();
  return search ? queryString.parse(search) : {};
};
