import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import $ from 'jquery';

import $ from 'jquery';
import 'select2';



// ✅ Make jQuery global for select2 to work
window.$ = $;
window.jQuery = $;

// Example init
$(document).ready(function () {
  $('.my-select').select2();
});


createRoot(document.getElementById('root')).render(
    <App />
)
