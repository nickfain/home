import logo from './logo.svg';
import './App.css';
import { useState } from "react";

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
		</div>
	)
}

function handleSubmit() {}

function retrieveFile() {}

export default App;
