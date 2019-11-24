import Homepage from "./components/Homepage";
import Team from "./components/Team";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage
    },
    {
        path: "/team",
        exact: true,
        component: Team
    },
]
export {routes}