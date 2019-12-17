import Homepage from "./components/Homepage";
import Team from "./components/Team";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

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
    {
        path:"/vision",
        exact: true,
        component: Vision
    },
    {
        path: "/contact",
        exact: true,
        component: Contact
    }
]
export {routes}