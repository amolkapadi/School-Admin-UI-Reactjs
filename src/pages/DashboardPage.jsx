import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Chip from "../components/common/Chip.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import StatCard from "../components/common/StatCard.jsx";
import Table from "../components/common/Table.jsx";
import UserCell from "../components/common/UserCell.jsx";
import { admissions, attendanceBars, events, feeSnapshot, stats } from "../data/mockData.js";

const admissionColumns = [
  {
    key: "student",
    header: "Student",
    render: (row) => <UserCell initials={row.initials} name={row.name} avatar={row.avatar} />,
  },
  { key: "className", header: "Class" },
  { key: "date", header: "Date" },
  {
    key: "status",
    header: "Status",
    render: (row) => <Badge tone={row.tone}>{row.status}</Badge>,
  },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="School overview for today — enrollment, attendance, and fees at a glance."
      >
        <Button variant="ghost" icon="download">Export</Button>
        <Button icon="plus-lg" to="/students/add">Add Student</Button>
      </PageHeader>

      <section className="stats">
        {stats.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </section>

      <section className="grid-2">
        <Panel title="Recent Admissions" action={<Link to="/students">View all</Link>}>
          <Table columns={admissionColumns} rows={admissions} getRowKey={(row) => row.name} />
        </Panel>

        <Panel title="Today’s Attendance" action={<Chip>Aug 6, 2026</Chip>}>
          <div className="attendance-list">
            {attendanceBars.map((item) => (
              <div className="attendance-item" key={item.label}>
                <div className="meta">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <div className={item.bar ? `bar ${item.bar}` : "bar"}>
                  <span style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
          <div className="attendance-summary">
            <div>
              <small>Overall rate</small>
              <strong>88.3%</strong>
            </div>
            <p>
              Best class today: <strong>Class 9-B</strong> at 97%
            </p>
          </div>
        </Panel>
      </section>

      <section className="grid-2">
        <Panel title="Upcoming Events" action={<Link to="/timetable">Calendar</Link>}>
          <ul className="event-list">
            {events.map((event) => (
              <li key={event.title}>
                <div className={event.tone ? `event-date ${event.tone}` : "event-date"}>
                  <span>{event.day}</span>
                  <small>{event.month}</small>
                </div>
                <div>
                  <strong>{event.title}</strong>
                  <span>{event.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Fee Collection Snapshot">
          <div className="fee-grid">
            {feeSnapshot.map((item) => (
              <div className="fee-box" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="fee-note">
            <i className="bi bi-info-circle" />
            38 families have pending dues for Term 2. Send reminders from Fees.
          </div>
        </Panel>
      </section>
    </>
  );
}
