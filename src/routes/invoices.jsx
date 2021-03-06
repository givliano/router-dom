import {
  Outlet,
  useSearchParams
} from 'react-router-dom';
import { getInvoices } from '../data';
import { QueryNavLink } from '../components/QueryNavLink';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: '1px solid',
          padding: '1rem'
        }}
      >

        <input
          value={searchParams.get('filter') || ''}
          onChange={event => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
          .filter(invoice => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = invoice.name.toLocaleLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map(invoice => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : ''
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
