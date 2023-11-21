import "./index.css";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

// All Providers
import Providers from "@/components/providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
  </Providers>
);
