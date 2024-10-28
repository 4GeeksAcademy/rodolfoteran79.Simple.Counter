//import react into the bundle
import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter";




const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<App />);


