import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import initSmoothScroll from "./lib/smoothScroll";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(<App />);

// initialize global smooth scrolling for in-page anchors
if (typeof window !== 'undefined') {
	initSmoothScroll();
}
