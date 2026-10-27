import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Input from "../components/common/Input.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Select from "../components/common/Select.jsx";
import Table from "../components/common/Table.jsx";
import Toolbar from "../components/common/Toolbar.jsx";
import UserCell from "../components/common/UserCell.jsx";
import { students } from "../data/mockData.js";

const columns = [
  {
    key: "student",
    header: "Student",
    render: (student) => (
      <UserCell initials={student.initials} name={student.name} avatar={student.avatar} />
    ),
  },
  { key: "id", header: "ID" },
  { key: "className", header: "Class" },
  { key: "parent", header: "Parent" },
  {
    key: "status",
    header: "Status",
    render: (student) => <Badge tone={student.tone}>{student.status}</Badge>,
  },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: () => (
      <>
        <Button variant="secondary" size="sm">Edit</Button>
        <Button variant="danger" size="sm">Remove</Button>
      </>
    ),
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHeader title="All Students" description="Browse and manage enrolled students across all classes.">
        <Button icon="plus-lg" to="/students/add">Add Student</Button>
      </PageHeader>

      <Toolbar
        left={
          <>
            <Input type="text" placeholder="Search by name or ID" readOnly />
            <Select
              defaultValue="All Classes"
              options={["All Classes", "Class 5-B", "Class 8-A", "Class 10-A"]}
            />
            <Select defaultValue="All Status" options={["All Status", "Active", "Pending"]} />
          </>
        }
        right={<Button variant="ghost" icon="download">Export</Button>}
      />

      <Panel>
        <Table columns={columns} rows={students} getRowKey={(student) => student.id} />
      </Panel>
    </>
  );
}
