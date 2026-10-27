import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Table from "../components/common/Table.jsx";
import { exams } from "../data/mockData.js";

const columns = [
  { key: "name", header: "Exam" },
  { key: "classes", header: "Classes" },
  { key: "start", header: "Start Date" },
  { key: "end", header: "End Date" },
  {
    key: "status",
    header: "Status",
    render: (exam) => <Badge tone={exam.tone}>{exam.status}</Badge>,
  },
  {
    key: "action",
    header: "Action",
    className: "actions",
    render: (exam) => <Button variant="secondary" size="sm">{exam.action}</Button>,
  },
];

export default function ExamsPage() {
  return (
    <>
      <PageHeader title="Exams" description="Plan exam schedules, halls, and result publishing.">
        <Button icon="plus-lg">Create Exam</Button>
      </PageHeader>

      <Panel>
        <Table columns={columns} rows={exams} getRowKey={(exam) => exam.name} />
      </Panel>
    </>
  );
}
