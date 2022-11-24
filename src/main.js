import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";

//componentes
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import RegisterPage from "./components/RegisterPage.vue";

//Definir Rutas -- configuración
const routes = [
  {
    path: "/",
    name:"home",
    component: HomePage,
  },
  {
    path: "/login",
    name:"LogIn",
    component: LoginPage,
  },
  {
    path: "/register",
    name:"Register",
    component: RegisterPage,
  },
];

//Crear Objeto Rutas de Vue Router -- -Objeto de VR
const router = createRouter({
  routes,
  history: createWebHashHistory(),
  mode: "history",
});

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faLink);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
