import Button from "../components/common/Button.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Table from "../components/common/Table.jsx";
import { subjects } from "../data/mockData.js";

const columns = [
  { key: "name", header: "Subject" },
  { key: "code", header: "Code" },
  { key: "classes", header: "Classes" },
  { key: "teachers", header: "Teachers" },
  { key: "type", header: "Type" },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: () => <Button variant="secondary" size="sm">Edit</Button>,
  },
];

export default function SubjectsPage() {
  return (
    <>
      <PageHeader title="Subjects" description="Organize subjects and map them to classes and teachers.">
        <Button icon="plus-lg">Add Subject</Button>
      </PageHeader>

      <Panel>
        <Table columns={columns} rows={subjects} getRowKey={(subject) => subject.code} />
      </Panel>
    </>
  );
}
