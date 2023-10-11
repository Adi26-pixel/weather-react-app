import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <WeatherSearch />
        <br />
        <p>
          This project was coded by Adeline and is{" "}
          <a
            href="https://github.com/Adi26-pixel/weather-react-app.git"
            target="_blank"
            rel="noreferrer">
            Open-sourced
          </a>{" "}
          on GitHub
        </p>
      </header>
    </div>
  );
}

export default App;
