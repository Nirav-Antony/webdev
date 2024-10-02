import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import BookingForm from "./pages/Booking"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Display from "./components/Display";
import MAP from "./pages/map";
import Landing from "./pages/home2";
import Display2 from "./components/Display2";
import Gallery from "./components/gallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element=
          {<Layout >
            <Landing />
            <Home />
          </Layout>}
        />



        <Route path="/display" element=
          {<Layout >
            <Display />
            <Gallery />
          </Layout>}
        />



<Route path="/display2" element=
          {<Layout >
            <Display2 />
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
        <Route path="/bookings" element={
          <Layout>
            <BookingForm />
          </Layout>
        }
        />

<Route path="/map" element={
          <Layout>
            <MAP />
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