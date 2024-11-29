import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"

// Document Object Model = DOM = Representação de html através de JavaScript
// Esse import do react dom é pra ele funcionar para a web

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
