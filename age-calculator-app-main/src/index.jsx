import React from "react";
import { createRoot } from 'react-dom/client';
import CalcApp from "./components/CalcApp";
import './stylings/index.css';

const root = createRoot(document.getElementById('root'))
root.render(<CalcApp />);