import { NavLink, useLocation } from 'react-router-dom';

export function QueryNavLink({ to, ...props }) {
  const location = useLocation();
  return <NavLink to={ to + location.search } { ...props } />
}
