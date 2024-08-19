import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
//import Booking from "./pages/Booking"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=
          {<Layout>
            <Home />
          </Layout>}
        />

        <Route path="/register" element={
          <Layout>
            <Register />
          </Layout>
        } />
        <Route path="/sign-in" element={
          <Layout>
            <SignIn />
          </Layout>
        }
        />
         {/* add Route for admin */}

        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;