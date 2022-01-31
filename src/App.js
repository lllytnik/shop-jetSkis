import './App.css';
import DesktopHome from './page/desktopHome/DesktopHome';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <DesktopHome />
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
