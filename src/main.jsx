import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ],
    processEscapes: true,
  },
  startup: {
    typeset: false
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <MathJaxContext version={3} config={config}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MathJaxContext>
)