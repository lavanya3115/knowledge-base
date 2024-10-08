export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sign Up",
      href: "/signup",
    },
    // {
    //   label: "Pricing",
    //   href: "/user",
    // },
    {
      label: "Post",
      href: "/post",
    },
    //{
      // label: "About",
      // href: "/about",
    //},
    {
      label: "Admin",
      href: "/admin",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/lavanya3115",
    twitter: "https://x.com/home?lang=en-in",
    docs:"https://kali.org",
  },
};
