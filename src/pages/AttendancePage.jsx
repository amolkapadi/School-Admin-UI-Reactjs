import Button from "../components/common/Button.jsx";
import Chip from "../components/common/Chip.jsx";
import Input from "../components/common/Input.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Select from "../components/common/Select.jsx";
import Table from "../components/common/Table.jsx";
import Toolbar from "../components/common/Toolbar.jsx";
import UserCell from "../components/common/UserCell.jsx";
import { attendanceRows } from "../data/mockData.js";

const statuses = ["Present", "Absent", "Late"];

const columns = [
  {
    key: "student",
    header: "Student",
    render: (row) => <UserCell initials={row.initials} name={row.name} avatar={row.avatar} />,
  },
  { key: "roll", header: "Roll No" },
  {
    key: "status",
    header: "Status",
    render: (row) => <Select defaultValue={row.status} options={statuses} />,
  },
  {
    key: "remark",
    header: "Remark",
    render: (row) => <Input type="text" placeholder="Optional note" defaultValue={row.remark} readOnly />,
  },
];

export default function AttendancePage() {
  return (
    <>
      <PageHeader title="Attendance" description="Mark and review daily student attendance by class.">
        <Button icon="check2-circle">Save Attendance</Button>
      </PageHeader>

      <Toolbar
        left={
          <>
            <Select defaultValue="Class 8-A" options={["Class 8-A", "Class 5-B", "Class 10-A"]} />
            <Input type="date" defaultValue="2026-08-06" readOnly />
          </>
        }
        right={<Chip>Present 28 · Absent 2 · Late 1</Chip>}
      />

      <Panel>
        <Table columns={columns} rows={attendanceRows} getRowKey={(row) => row.roll} />
      </Panel>
    </>
  );
}
