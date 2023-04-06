import "./style.css";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import Basemap from "./Basemap.jsx";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <div>
            <App />
        </div>
    </>
);
