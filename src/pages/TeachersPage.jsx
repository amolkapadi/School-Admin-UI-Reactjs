import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Input from "../components/common/Input.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Select from "../components/common/Select.jsx";
import Table from "../components/common/Table.jsx";
import Toolbar from "../components/common/Toolbar.jsx";
import UserCell from "../components/common/UserCell.jsx";
import { teachers } from "../data/mockData.js";

const columns = [
  {
    key: "teacher",
    header: "Teacher",
    render: (teacher) => (
      <UserCell initials={teacher.initials} name={teacher.name} avatar={teacher.avatar} />
    ),
  },
  { key: "subject", header: "Subject" },
  { key: "classes", header: "Classes" },
  { key: "phone", header: "Phone" },
  {
    key: "status",
    header: "Status",
    render: (teacher) => <Badge tone={teacher.tone}>{teacher.status}</Badge>,
  },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: () => <Button variant="secondary" size="sm">Edit</Button>,
  },
];

export default function TeachersPage() {
  return (
    <>
      <PageHeader title="Teachers" description="Manage teaching staff, subjects, and class assignments.">
        <Button icon="plus-lg">Add Teacher</Button>
      </PageHeader>

      <Toolbar
        left={
          <>
            <Input type="text" placeholder="Search teacher" readOnly />
            <Select
              defaultValue="All Departments"
              options={["All Departments", "Science", "Maths", "English"]}
            />
          </>
        }
      />

      <Panel>
        <Table columns={columns} rows={teachers} getRowKey={(teacher) => teacher.name} />
      </Panel>
    </>
  );
}
