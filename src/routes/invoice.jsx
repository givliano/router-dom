import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data.js';

export default function Invoices() {
  const navigate = useNavigate()
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(invoice);

  return (
    <main style={{ padding: '1rem ' }}>
      <h2>Total due: {invoice.number}</h2>

      <p>{invoice.name}: {invoice.number}</p>

      <p>Due date: {invoice.due}</p>

      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices')
          }}
        >
          Delete
        </button>
      </p>
    </main>
  )
}
