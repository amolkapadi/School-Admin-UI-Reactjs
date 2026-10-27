import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import AddStudentPage from "./pages/AddStudentPage.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import ClassesPage from "./pages/ClassesPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ExamsPage from "./pages/ExamsPage.jsx";
import FeesPage from "./pages/FeesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import StudentsPage from "./pages/StudentsPage.jsx";
import SubjectsPage from "./pages/SubjectsPage.jsx";
import TeachersPage from "./pages/TeachersPage.jsx";
import TimetablePage from "./pages/TimetablePage.jsx";
import TransportPage from "./pages/TransportPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/add" element={<AddStudentPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}
