import { upload } from "@testing-library/user-event/dist/upload";

export const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "About",
    submenu: [
      {
        title: "Vision",
        path: "/vision",
      },
      {
        title: "Values",
        path: "/values",
      },
      {
        title: "Team",
        path: "/team",
      },
    ],
  },
  {
    title: "Sign up",
    path: "/signUp",
  },
];
