import { useParams } from 'react-router-dom';
import { getInvoice } from '../data.js';

export default function Invoices() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  console.log(invoice);

  return (
    <main style={{ padding: '1rem ' }}>
      <h2>Total due: {invoice.number}</h2>

      <p>{invoice.name}: {invoice.number}</p>

      <p>Due date: {invoice.due}</p>
    </main>
  )
}
