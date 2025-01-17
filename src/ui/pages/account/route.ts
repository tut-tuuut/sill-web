import { createGroup, defineRoute, createRouter, type Route } from "type-route";

export const routeDefs = {
    "account": defineRoute("/account")
};

export const routeGroup = createGroup(Object.values(createRouter(routeDefs).routes));

export type PageRoute = Route<typeof routeGroup>;

export const getDoRequireUserLoggedIn: (route: PageRoute) => boolean = () => false;
