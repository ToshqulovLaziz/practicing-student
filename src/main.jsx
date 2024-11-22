import { createRoot } from "react-dom/client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-chat-elements/dist/main.css";
import "./index.css";
import Root from "./Root";
import ProviderConfig from "./tools/provider";

createRoot(document.getElementById("root")).render(
  <ProviderConfig>
    <Root />
  </ProviderConfig>
);
