import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import $ from 'jquery';

// ✅ Make jQuery global for select2 to work
window.$ = $;
window.jQuery = $;

createRoot(document.getElementById('root')).render(
    <App />
)
