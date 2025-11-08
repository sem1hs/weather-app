import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import * as TanstackQuery from "./providers/TanstackQueryProvider";

import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const tanstackQueryContext = TanstackQuery.getContext();

  const router = createRouter({
    routeTree,
    context: { ...tanstackQueryContext },
    defaultPreload: "intent",
    Wrap: (props: { children: React.ReactNode }) => {
      return (
        <TanstackQuery.Provider {...tanstackQueryContext}>
          {props.children}
        </TanstackQuery.Provider>
      );
    },
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient: tanstackQueryContext.queryClient,
  });

  return router;
};
