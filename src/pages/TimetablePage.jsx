import PageHeader from "../components/common/PageHeader.jsx";
import Panel from "../components/common/Panel.jsx";
import Select from "../components/common/Select.jsx";
import { timetableDays, timetableRows } from "../data/mockData.js";

export default function TimetablePage() {
  return (
    <>
      <PageHeader title="Timetable" description="Weekly class schedule for Class 8-A.">
        <Select
          className="field-control"
          defaultValue="Class 8-A"
          options={["Class 8-A", "Class 5-B", "Class 10-A"]}
        />
      </PageHeader>

      <Panel>
        <div className="timetable-scroll">
          <div className="timetable-grid">
            <div className="tt-head">Time</div>
            {timetableDays.map((day) => (
              <div className="tt-head" key={day}>{day}</div>
            ))}

            {timetableRows.map((row) => (
              <div key={row.time} style={{ display: "contents" }}>
                <div className="tt-time">{row.time}</div>
                {row.slots.map(([subject, teacher], index) => (
                  <div className="tt-cell" key={`${row.time}-${index}`}>
                    <strong>{subject}</strong>
                    <span>{teacher}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </>
  );
}
