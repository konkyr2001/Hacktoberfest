import PageLayout from "./Layout/PageLayout";
import Register from "./Pages/Register/Register";
import Participants from "./Pages/Participants/Participants";
import ErrorPage from "./Pages/ErrorPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate replace to="register" />} />
          <Route path="register" element={<Register />} />
          <Route path="participants" element={<Participants />} />
          {/* <Route path="error" element={<ErrorPage />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
