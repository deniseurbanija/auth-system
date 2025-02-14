import { userSchema } from "./schemas/user.schema";
import { postSchema } from "./schemas/post.schema";
import { authPaths } from "./paths/auth.paths";
import { postPaths } from "./paths/post.paths";
import { userPaths } from "./paths/user.paths";

export const swaggerConfig = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API with Authentication",
      version: "1.0.0",
      description: "API for user authentication and post management",
    },
    servers: [
      {
        url: "http://52.87.175.254:3000", //should create load-balancer
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        ...userSchema,
        ...postSchema,
      },
    },
    paths: {
      ...authPaths,
      ...postPaths,
      ...userPaths,
    },
  },
  apis: [], // We don't need this since we're defining paths in code
};
