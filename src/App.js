import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}>
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/*
        It nests the URLs ("/" + "expenses" and "/" + "invoices")
        It will nest the UI components for shared layout when the child route matches:
      */}
      <Outlet />
    </div>
  );
}
