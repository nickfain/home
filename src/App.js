import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

const App = () => {
	const [file, setFile] = useState(null);
    const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      console.log("Buffer data: ", Buffer(reader.result));
    }

    e.preventDefault();  
  }
  
	return (
	<Router>
		<div className="App">
		
		  <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  Choose file(s) to upload.
			</p>
		  <form className="form" onSubmit={handleSubmit}>
			<input type="file" name="data" onChange={retrieveFile} />
			<button type="submit" className="btn">Upload file</button>
		  </form>
		  </header>
		  
		<nav>
		  <ul>
			<li>
			  <Link to="/">Home</Link>
			</li>
			<li>
			  <Link to="/about">About</Link>
			</li>
			<li>
			  <Link to="/users">Users</Link>
			</li>
		  </ul>
		</nav>
		
		{/* A <Switch> looks through its children <Route>s and
		renders the first one that matches the current URL. */}
        <Routes>
		  <Route path="/" element={<Home/>}/>
		  <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
		
		</div>
	</Router>
	);
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function handleSubmit() {}

function retrieveFile() {}

export default App;
