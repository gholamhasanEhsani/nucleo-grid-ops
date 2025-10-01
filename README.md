# NUCLEO-GRID OPS

**Genre:** Industrial Management / Strategy Simulator

**Author:** Gholamhasan Ehsani

## Overview:

NUCLEO-GRID OPS is a web-based nuclear and power grid management simulator. Players operate nuclear plants, thermal and renewable power plants, and the grid simultaneously, managing safety, economics, and reliability under realistic SCADA-style controls.

The game emphasizes multi-desktop control (Plant Control & Grid Control), mouse-driven SCADA panels with sliders, switches, and emergency buttons, realistic plant physics and grid balancing, and emergency management under time pressure.

## Tech Stack:

- **Frontend:** HTML, CSS, JavaScript (Node.js server for static files and API proxy)
- **Backend:** Python 3 + FastAPI (simulation engine, plant & grid state, API endpoints)
- **Communication:** HTTP API (later phases will include WebSocket for real-time updates)

## Project Structure:

*/frontend* – Node.js static server + JS for UI interaction

*/backend* – FastAPI backend, simulation logic

*/public* – Static assets: HTML, CSS, JS

## Installation:

**1. Backend:**
Navigate to the backend folder, create a virtual environment, install dependencies, and start the FastAPI server:

```bash
cd backend
python -m venv venv
venv\Scripts\activate #(for Windows)
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

**2. Frontend:**
Navigate to the frontend folder and start the Node.js server:

```bash
cd frontend
npm install
node index.js
```

Open <http://127.0.0.1:4000> in your browser to access the game interface.

## License:

This project is licensed under the MIT License. See LICENSE file for details.