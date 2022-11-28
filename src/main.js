import { createApp } from "vue";
import App from "./App.vue";

import UiButton from "./components/ui/UiButton.vue";
import UiInput from "./components/ui/UiInput.vue";

const app = createApp(App);

app.component("ui-button", UiButton);
app.component("ui-input", UiInput);

app.mount("#app");
