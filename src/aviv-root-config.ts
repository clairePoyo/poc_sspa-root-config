import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@aviv/form",
  app: (props) => System.import("@aviv/form"),
  activeWhen: ["/"],
  customProps: {
    brand_id: "MA",
    isAuthenticate: false,
    user: {
      id: 111,
      firstName: "Erlich",
      lastname: "Bachman",
    },
  },
});

start({
  urlRerouteOnly: true,
});
