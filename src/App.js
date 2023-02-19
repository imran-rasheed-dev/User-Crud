import * as React from "react";
import { Routes, Route, NavLink  } from "react-router-dom";
import './App.css';
import Create from './Components/Create'
import Read from './Components/Read'
import Ubdate from './Components/Ubdate'
function App() {
	let activeClassName = "active";
	return (
		<>
			<div className="main">
				<div>
					<nav>
						<ul>
							<li>
								<NavLink  to="/Create"className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } >Create</NavLink>
							</li>
							<li>
								<NavLink to="/Read" className={({ isActive }) =>
              isActive ? activeClassName : undefined
            } >Read</NavLink>
							</li>
						</ul>
					</nav>
					<div>
						React Crud Operations
					</div>
					<Routes>
						<Route path="Create" element={<Create />} />
						<Route path="Read" element={<Read />} />
						<Route path="Ubdate" element={<Ubdate />} />
					</Routes>
				</div>
			</div>

		</>
	);
}

export default App;
