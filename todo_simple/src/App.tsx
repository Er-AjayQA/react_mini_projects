import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainLayout } from "./components/layouts/mainLayout";
import { Dashboard } from "./pages/Dashboard";
import { MyTasks } from "./pages/MyTasks";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout as parent route with path */}
        <Route path="/" element={<MainLayout />}>
          {/* Index route for / */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          {/* Child routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-tasks" element={<MyTasks />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
