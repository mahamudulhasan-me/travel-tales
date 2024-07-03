import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/ui/PrivateRoute";
import PublicRoute from "./components/ui/PublicRoute";
import useAuthChecked from "./hooks/useAuthChecked";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const authChecked = useAuthChecked();
  return authChecked ? (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <PrivateRoute>
              <Conversation />
            </PrivateRoute>
          }
        />
        <Route
          path="/inbox/:id"
          element={
            <PrivateRoute>
              <Inbox />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  ) : (
    <p>Checking authentication....</p>
  );
}

export default App;
