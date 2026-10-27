export const stats = [
  {
    icon: "bi-mortarboard",
    tone: "teal",
    label: "Total Students",
    value: "1,248",
    trend: "+42 this term",
    trendUp: true,
  },
  {
    icon: "bi-person-badge",
    tone: "amber",
    label: "Teachers",
    value: "86",
    trend: "+3 new hires",
    trendUp: true,
  },
  {
    icon: "bi-building",
    tone: "sky",
    label: "Active Classes",
    value: "42",
    trend: "Grade 1–12",
  },
  {
    icon: "bi-cash-coin",
    tone: "green",
    label: "Fees Collected",
    value: "₹18.4L",
    trend: "92% of target",
    trendUp: true,
  },
];

export const admissions = [
  {
    initials: "RS",
    name: "Riya Sharma",
    className: "Class 8-A",
    date: "05 Aug 2026",
    status: "Enrolled",
    tone: "success",
  },
  {
    initials: "AP",
    name: "Aarav Patel",
    avatar: "warm",
    className: "Class 5-B",
    date: "04 Aug 2026",
    status: "Pending",
    tone: "warning",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    avatar: "cool",
    className: "Class 10-A",
    date: "03 Aug 2026",
    status: "Enrolled",
    tone: "success",
  },
  {
    initials: "VM",
    name: "Vivaan Mehta",
    className: "Class 3-C",
    date: "02 Aug 2026",
    status: "On Hold",
    tone: "danger",
  },
];

export const attendanceBars = [
  { label: "Present", value: "1,102", width: "88%" },
  { label: "Absent", value: "96", width: "8%", bar: "absent" },
  { label: "Late", value: "50", width: "4%", bar: "late" },
];

export const events = [
  { day: "12", month: "Aug", title: "Parent–Teacher Meeting", detail: "Main Hall · 10:00 AM" },
  {
    day: "18",
    month: "Aug",
    title: "Science Fair",
    detail: "Labs Block · All day",
    tone: "amber",
  },
  {
    day: "22",
    month: "Aug",
    title: "Mid-Term Exams Begin",
    detail: "Classes 6–12",
    tone: "green",
  },
];

export const feeSnapshot = [
  { label: "Collected", value: "₹18.4L" },
  { label: "Pending", value: "₹1.6L" },
  { label: "Overdue", value: "₹42K" },
  { label: "Scholarships", value: "64" },
];

export const students = [
  {
    initials: "RS",
    name: "Riya Sharma",
    id: "STU-2401",
    className: "Class 8-A",
    parent: "Meena Sharma",
    status: "Active",
    tone: "success",
  },
  {
    initials: "AP",
    name: "Aarav Patel",
    avatar: "warm",
    id: "STU-2402",
    className: "Class 5-B",
    parent: "Kiran Patel",
    status: "Pending",
    tone: "warning",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    avatar: "cool",
    id: "STU-2403",
    className: "Class 10-A",
    parent: "Anil Kapoor",
    status: "Active",
    tone: "success",
  },
  {
    initials: "VM",
    name: "Vivaan Mehta",
    id: "STU-2404",
    className: "Class 3-C",
    parent: "Pooja Mehta",
    status: "Active",
    tone: "success",
  },
  {
    initials: "SJ",
    name: "Sara Joshi",
    avatar: "warm",
    id: "STU-2405",
    className: "Class 7-A",
    parent: "Ravi Joshi",
    status: "On Hold",
    tone: "danger",
  },
];

export const attendanceRows = [
  { initials: "RS", name: "Riya Sharma", roll: "01", status: "Present", remark: "" },
  {
    initials: "AP",
    name: "Aarav Patel",
    avatar: "warm",
    roll: "02",
    status: "Late",
    remark: "Bus delay",
  },
  {
    initials: "NK",
    name: "Neha Kapoor",
    avatar: "cool",
    roll: "03",
    status: "Present",
    remark: "",
  },
  { initials: "VM", name: "Vivaan Mehta", roll: "04", status: "Absent", remark: "Sick leave" },
];

export const teachers = [
  {
    initials: "PD",
    name: "Priya Deshmukh",
    subject: "Mathematics",
    classes: "8-A, 9-B",
    phone: "+91 98001 11223",
    status: "Active",
    tone: "success",
  },
  {
    initials: "RK",
    name: "Rohan Kale",
    avatar: "warm",
    subject: "Science",
    classes: "6-A, 7-C",
    phone: "+91 98001 44556",
    status: "Active",
    tone: "success",
  },
  {
    initials: "AN",
    name: "Ananya Nair",
    avatar: "cool",
    subject: "English",
    classes: "10-A, 11-B",
    phone: "+91 98001 77889",
    status: "On Leave",
    tone: "warning",
  },
];

export const classStats = [
  { icon: "bi-building", tone: "teal", label: "Total Classes", value: "42" },
  { icon: "bi-people", tone: "amber", label: "Avg Strength", value: "30" },
  { icon: "bi-door-open", tone: "sky", label: "Rooms Used", value: "38" },
  { icon: "bi-person-check", tone: "green", label: "Class Teachers", value: "42" },
];

export const classes = [
  { name: "Class 8", section: "A", students: "32", teacher: "Priya Deshmukh", room: "R-204" },
  { name: "Class 5", section: "B", students: "28", teacher: "Rohan Kale", room: "R-112" },
  { name: "Class 10", section: "A", students: "35", teacher: "Ananya Nair", room: "R-301" },
  { name: "Class 3", section: "C", students: "26", teacher: "Sneha Iyer", room: "R-108" },
];

export const subjects = [
  { name: "Mathematics", code: "MATH", classes: "5–12", teachers: "4", type: "Core" },
  { name: "Science", code: "SCI", classes: "5–10", teachers: "5", type: "Core" },
  { name: "English", code: "ENG", classes: "1–12", teachers: "6", type: "Core" },
  { name: "Computer Science", code: "CS", classes: "6–12", teachers: "2", type: "Elective" },
  { name: "Physical Education", code: "PE", classes: "1–12", teachers: "3", type: "Activity" },
];

export const timetableDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const timetableRows = [
  {
    time: "09:00",
    slots: [
      ["Maths", "P. Deshmukh"],
      ["English", "A. Nair"],
      ["Science", "R. Kale"],
      ["Maths", "P. Deshmukh"],
      ["CS", "V. Shah"],
    ],
  },
  {
    time: "10:00",
    slots: [
      ["Science", "R. Kale"],
      ["Maths", "P. Deshmukh"],
      ["English", "A. Nair"],
      ["History", "S. Iyer"],
      ["Science", "R. Kale"],
    ],
  },
  {
    time: "11:15",
    slots: [
      ["English", "A. Nair"],
      ["PE", "Ground"],
      ["Maths", "P. Deshmukh"],
      ["CS", "V. Shah"],
      ["Art", "Studio"],
    ],
  },
];

export const exams = [
  {
    name: "Mid-Term 2026",
    classes: "6–12",
    start: "22 Aug 2026",
    end: "30 Aug 2026",
    status: "Upcoming",
    tone: "warning",
    action: "Manage",
  },
  {
    name: "Unit Test 2",
    classes: "1–5",
    start: "10 Jul 2026",
    end: "14 Jul 2026",
    status: "Completed",
    tone: "success",
    action: "Results",
  },
  {
    name: "Pre-Board",
    classes: "10, 12",
    start: "05 Dec 2026",
    end: "18 Dec 2026",
    status: "Scheduled",
    action: "Manage",
  },
];

export const feeStats = [
  { icon: "bi-cash-coin", tone: "green", label: "Collected", value: "₹18.4L" },
  { icon: "bi-hourglass-split", tone: "amber", label: "Pending", value: "₹1.6L" },
  { icon: "bi-exclamation-circle", tone: "sky", label: "Overdue", value: "₹42K" },
  { icon: "bi-award", tone: "teal", label: "Scholarships", value: "64" },
];

export const payments = [
  { receipt: "#FEE-8821", student: "Riya Sharma", term: "Term 2", amount: "₹18,500", status: "Paid", tone: "success" },
  { receipt: "#FEE-8820", student: "Aarav Patel", term: "Term 2", amount: "₹16,200", status: "Partial", tone: "warning" },
  { receipt: "#FEE-8819", student: "Vivaan Mehta", term: "Term 2", amount: "₹15,800", status: "Overdue", tone: "danger" },
];

export const routes = [
  { name: "North Line", bus: "MH-12-AB-4411", driver: "Suresh Patil", students: "42", stops: "8", status: "Active", tone: "success" },
  { name: "East Circle", bus: "MH-12-CD-2290", driver: "Imran Shaikh", students: "36", stops: "7", status: "Active", tone: "success" },
  { name: "West Park", bus: "MH-12-EF-1188", driver: "Ramesh More", students: "29", stops: "6", status: "Maintenance", tone: "warning" },
];

export const notificationSettings = [
  { id: "fees", label: "Fee payment alerts", on: true },
  { id: "attendance", label: "Attendance warnings", on: true },
  { id: "exams", label: "Exam schedule updates", on: false },
  { id: "transport", label: "Transport delay alerts", on: true },
];
