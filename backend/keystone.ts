import "dotenv/config";
import { config } from "@keystone-6/core";

import { lists } from "./schema";

import { withAuth, session } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    server: {
      cors: {
        csrfPrevention: false,
        origin: [process.env.FRONTEND_URL],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization", "x-apollo-operation-name", "apollo-require-preflight"],
        methods: ["GET", "POST", "OPTIONS"],
      },
    },
    lists,
    session,
  })
);
