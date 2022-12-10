import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Footer } from "./template/Footer";

const AppWithUI = () => (
  <StrictMode>
    <BrowserRouter>
      <App />
      <Footer
        githubTitle="@olros"
        githubUrl="https://github.com/olros"
        linkedinTitle="LinkedIn"
        linkedinUrl="https://www.linkedin.com/in/olaf-rosendahl/"
      />
    </BrowserRouter>
  </StrictMode>
);

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<AppWithUI />);
