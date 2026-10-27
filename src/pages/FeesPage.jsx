import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import StatCard from "../components/common/StatCard.jsx";
import Table from "../components/common/Table.jsx";
import { feeStats, payments } from "../data/mockData.js";

const columns = [
  { key: "receipt", header: "Receipt" },
  { key: "student", header: "Student" },
  { key: "term", header: "Term" },
  { key: "amount", header: "Amount" },
  {
    key: "status",
    header: "Status",
    render: (payment) => <Badge tone={payment.tone}>{payment.status}</Badge>,
  },
];

export default function FeesPage() {
  return (
    <>
      <PageHeader title="Fees" description="Track fee collection, pending dues, and reminders.">
        <Button variant="ghost" icon="send">Send Reminders</Button>
        <Button icon="plus-lg">Record Payment</Button>
      </PageHeader>

      <section className="stats">
        {feeStats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <Panel title="Recent Payments" action={<a href="#payments">View all</a>}>
        <Table columns={columns} rows={payments} getRowKey={(payment) => payment.receipt} />
      </Panel>
    </>
  );
}
