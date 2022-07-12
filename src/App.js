import logo from "./logo.svg";
import "./App.css";
import HeaderBooking from "./Components/HeaderBooking/HeaderBooking";
import BodyBooking from "./Components/BodyBooking/BodyBooking";
import FooterBooking from "./Components/FooterBooking/FooterBooking";


function App() {
  return (
    <div className="App">
      <HeaderBooking />
      <BodyBooking />
      <FooterBooking />
    </div>
  );
}

export default App;
