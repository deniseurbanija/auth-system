export const postPaths = {
  "/posts": {
    get: {
      tags: ["Posts"],
      summary: "Get all posts",
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          in: "query",
          name: "page",
          schema: {
            type: "integer",
            default: 1,
          },
          description: "Page number for pagination",
        },
        {
          in: "query",
          name: "limit",
          schema: {
            type: "integer",
            default: 10,
          },
          description: "Number of posts per page",
        },
      ],
      responses: {
        "200": {
          description: "List of posts",
        },
      },
    },
    post: {
      tags: ["Posts"],
      summary: "Create new posts",
      security: [{ BearerAuth: [] }],
    },
  },
};
