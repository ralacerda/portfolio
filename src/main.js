import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import "./assets/main.css";

export const createApp = ViteSSG(App);
