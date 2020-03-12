import Homepage from "./components/Homepage";
import PageMember from "./components/PageMember";

const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage
    },
    {
        path: "/member",
        exact: true,
        component: PageMember
    },
]
export { routes }