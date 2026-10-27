import Button from "../components/common/Button.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import StatCard from "../components/common/StatCard.jsx";
import Table from "../components/common/Table.jsx";
import { classes, classStats } from "../data/mockData.js";

const columns = [
  { key: "name", header: "Class" },
  { key: "section", header: "Section" },
  { key: "students", header: "Students" },
  { key: "teacher", header: "Class Teacher" },
  { key: "room", header: "Room" },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: () => <Button variant="secondary" size="sm">View</Button>,
  },
];

export default function ClassesPage() {
  return (
    <>
      <PageHeader title="Classes" description="View class sections, strength, and class teachers.">
        <Button icon="plus-lg">Add Class</Button>
      </PageHeader>

      <section className="stats">
        {classStats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <Panel>
        <Table columns={columns} rows={classes} getRowKey={(item) => `${item.name}-${item.section}`} />
      </Panel>
    </>
  );
}
