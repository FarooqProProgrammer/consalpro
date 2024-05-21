import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Contact from "./Contact";
import Error from "./Error";
import Portfolio from "./Portfolio";
import Service from "./Service";
import ServiceDetails from "./ServiceDetails";
import Team from "./Team";

export const Pages = [
    {
        route: '/',
        element: <Home />
    },
    {
        route: '/about',
        element: <About />
    },
    {
        route: '/blog',
        element: <Blog />
    },
    {
        route: '/blog-detail',
        element: <BlogDetail />
    },
    {
        route: '/contact',
        element: <Contact />
    },
    {
        route: '*',
        element: <Error />
    },
    {
        route: '/portfolio',
        element: <Portfolio />
    },
    {
        route: '/service',
        element: <Service />
    },
    {
        route: '/service-detail',
        element: <ServiceDetails />
    },
    {
        route: '/team',
        element: <Team />
    },
]

