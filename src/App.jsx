import "./main.css";
import image from "./assets/logo-bit.png";
import Title from "./title";

function App() {
  return (
    <>
      <div className="container">
        <img src={image} className="logo" />
      </div>
        <Title/>
    </>
  );
}


export default App;
