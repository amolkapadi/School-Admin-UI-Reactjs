import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Table from "../components/common/Table.jsx";
import { routes } from "../data/mockData.js";

const columns = [
  { key: "name", header: "Route" },
  { key: "bus", header: "Bus No" },
  { key: "driver", header: "Driver" },
  { key: "students", header: "Students" },
  { key: "stops", header: "Stops" },
  {
    key: "status",
    header: "Status",
    render: (route) => <Badge tone={route.tone}>{route.status}</Badge>,
  },
];

export default function TransportPage() {
  return (
    <>
      <PageHeader title="Transport" description="Manage bus routes, vehicles, and student assignments.">
        <Button icon="plus-lg">Add Route</Button>
      </PageHeader>

      <Panel>
        <Table columns={columns} rows={routes} getRowKey={(route) => route.bus} />
      </Panel>
    </>
  );
}
