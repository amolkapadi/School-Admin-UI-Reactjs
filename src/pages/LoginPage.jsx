import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../components/common/Checkbox.jsx";
import Input from "../components/common/Input.jsx";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Campora | Login";
  }, []);

  return (
    <div className="login-page">
      <div className="login-shell">
        <section className="login-visual" aria-hidden="true">
          <div className="login-visual-inner">
            <div className="login-brand">
              <span className="login-brand-mark">CA</span>
              <div>
                <strong>Campora</strong>
                <small>School Management</small>
              </div>
            </div>
            <h1>Run your campus from one calm place.</h1>
            <p>
              Track students, staff, classes, and fees with a clear admin workspace built for
              schools.
            </p>
            <ul className="login-points">
              <li>
                <i className="bi bi-people" /> Student & staff records
              </li>
              <li>
                <i className="bi bi-calendar3" /> Classes & attendance
              </li>
              <li>
                <i className="bi bi-wallet2" /> Fees & reports
              </li>
            </ul>
          </div>
        </section>

        <section className="login-panel">
          <div className="login-card">
            <p className="login-kicker">Welcome back</p>
            <h2>Sign in to Campora</h2>
            <p className="login-sub">
              Use any details — this is a UI demo. Click Login to open the dashboard.
            </p>

            <form
              className="login-form"
              onSubmit={(event) => {
                event.preventDefault();
                navigate("/dashboard");
              }}
            >
              <Input
                icon="envelope"
                label="Email"
                type="email"
                placeholder="admin@school.edu"
                defaultValue="admin@campora.edu"
                readOnly
              />

              <Input
                icon="lock"
                label="Password"
                type="password"
                placeholder="••••••••"
                defaultValue="password"
                readOnly
              />

              <div className="login-meta">
                <Checkbox label="Remember me" defaultChecked readOnly />
                <a href="#forgot">Forgot password?</a>
              </div>

              <button type="submit" className="btn-login">
                Login
                <i className="bi bi-arrow-right" />
              </button>
            </form>

            <p className="login-foot">Demo access for school administrators</p>
          </div>
        </section>
      </div>
    </div>
  );
}
