import Homepage from "./components/Homepage";
import Services from "./components/Services";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage
    },
    {
        path: "/team",
        exact: true,
        component: Services
    },
]
export {routes}