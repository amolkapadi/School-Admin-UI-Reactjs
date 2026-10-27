import { useState } from "react";
import Button from "../components/common/Button.jsx";
import { FormActions, FormGrid } from "../components/common/FormCard.jsx";
import Input from "../components/common/Input.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import Select from "../components/common/Select.jsx";
import Toggle from "../components/common/Toggle.jsx";
import { notificationSettings } from "../data/mockData.js";

export default function SettingsPage() {
  const [toggles, setToggles] = useState(notificationSettings);

  return (
    <>
      <PageHeader title="Settings" description="Configure school profile, notifications, and preferences." />

      <div className="settings-grid">
        <div className="settings-card">
          <h3>School Profile</h3>
          <p>Basic campus details shown across the admin panel.</p>
          <FormGrid>
            <Input label="School Name" full type="text" defaultValue="Campora Public School" readOnly />
            <Select label="Board" defaultValue="CBSE" options={["CBSE", "ICSE", "State"]} />
            <Input label="Academic Year" type="text" defaultValue="2026–27" readOnly />
          </FormGrid>
          <FormActions>
            <Button>Save Changes</Button>
          </FormActions>
        </div>

        <div className="settings-card">
          <h3>Notifications</h3>
          <p>Choose which alerts reach administrators.</p>
          {toggles.map((item) => (
            <Toggle
              key={item.id}
              label={item.label}
              on={item.on}
              onClick={() =>
                setToggles((current) =>
                  current.map((toggle) =>
                    toggle.id === item.id ? { ...toggle, on: !toggle.on } : toggle,
                  ),
                )
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
