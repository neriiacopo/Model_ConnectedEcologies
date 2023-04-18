import "./style.css";
import "semantic-ui-css/semantic.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <>
        <div>
            <App />
        </div>
    </>
);
