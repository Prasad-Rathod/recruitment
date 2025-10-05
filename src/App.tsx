import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";


export default function App() {
  return (
        <BrowserRouter>
        <MainRoute></MainRoute>
      </BrowserRouter>
  );
}