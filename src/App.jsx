import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav aria-label="Reclamações">
        <Link to="/revisao-ia">Revisar uma reclamação com IA</Link>
      </nav>
      <Dashboard />
    </>
  );
}

export default App;
