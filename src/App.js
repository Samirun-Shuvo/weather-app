import hotbg from "./assets/hotbg.jpg";
// import coldbg from "./assets/coldbg.jpg";
import Discription from "./components/Description.js";

function App() {
  // api=https://api.openweathermap.org/data/2.5/weather?q=paris&appid=dfdb1dcc8650a84dffa9797d5d3ecb6b
  return (
    <div className="app" style={{ backgroundImage: `url(${hotbg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
              />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>

          <Discription></Discription>
        </div>
      </div>
    </div>
  );
}

export default App;
