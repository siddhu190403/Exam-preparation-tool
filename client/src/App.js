import Login from './Components/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from './Components/searchpage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/search" element={<SearchPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;