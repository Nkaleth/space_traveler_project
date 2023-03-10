import { Route, Routes } from 'react-router-dom';
import MissionsPage from './components/Missions';
import MyProfilePage from './components/MyProfile';
import NavBar from './components/Navbar';
import RocketPage from './components/RocketPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
