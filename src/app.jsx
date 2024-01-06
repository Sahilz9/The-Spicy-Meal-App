import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "../src/Components/Error";
import Contact from "./Components/contact";
import RestaurantMenu from "./Components/restaurantMenu";
import Profile from "./Components/profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./Components/Cart";
import { Auth0Provider } from "@auth0/auth0-react";

const AppLayout = () => {
  return (
    <Auth0Provider
      domain="dev-x5d0ldekzxzpx188.us.auth0.com"
      clientId="MxhAaQpgjCbNA0TtE2wyQ2hE9FhuCgOz"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <HeaderComponent />
        {/* <About />
      <Body />
      <Contact /> */}
        <Outlet />
        <Footer />
      </Provider>
    </Auth0Provider>
  );
};

const Instamart = lazy(() => import("./Components/instamart"));
//To make the About children of AppLayout or after the Header and Body component (Have to use element insise the appRouter component)

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
