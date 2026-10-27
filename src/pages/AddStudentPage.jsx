import Button from "../components/common/Button.jsx";
import { FormActions, FormCard, FormGrid } from "../components/common/FormCard.jsx";
import Input from "../components/common/Input.jsx";
import PageHeader from "../components/common/PageHeader.jsx";
import RadioGroup from "../components/common/RadioGroup.jsx";
import Select from "../components/common/Select.jsx";
import Textarea from "../components/common/Textarea.jsx";

export default function AddStudentPage() {
  return (
    <>
      <PageHeader title="Add Student" description="Register a new student into the school system." />

      <FormCard>
        <FormGrid>
          <Input label="First Name" type="text" placeholder="Enter first name" defaultValue="Riya" readOnly />
          <Input label="Last Name" type="text" placeholder="Enter last name" defaultValue="Sharma" readOnly />
          <Input label="Date of Birth" type="date" defaultValue="2013-05-14" readOnly />
          <RadioGroup label="Gender" name="gender" value="Female" options={["Female", "Male", "Other"]} />
          <Select label="Class" defaultValue="Class 8-A" options={["Class 8-A", "Class 5-B", "Class 10-A"]} />
          <Input label="Admission Date" type="date" defaultValue="2026-08-05" readOnly />
          <Input label="Parent / Guardian" type="text" placeholder="Parent name" defaultValue="Meena Sharma" readOnly />
          <Input label="Phone" type="text" placeholder="+91 98765 43210" defaultValue="+91 98765 43210" readOnly />
          <Textarea label="Address" full placeholder="Full address" defaultValue="12 Green Avenue, Pune" readOnly />
        </FormGrid>
        <FormActions>
          <Button variant="ghost" to="/students">Cancel</Button>
          <Button to="/students">Save Student</Button>
        </FormActions>
      </FormCard>
    </>
  );
}
