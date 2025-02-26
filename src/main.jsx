import ReactDOM from "react-dom/client";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Adiciona o ícone de estrela ao "library" para uso global
library.add(faStar);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
