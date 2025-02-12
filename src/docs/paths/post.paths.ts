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
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                content: { type: "string" },
                imageUrl: { type: "string" },
                userId: { type: "string" },
              },
              required: ["content", "userId"],
            },
          },
        },
      },
    },
  },

  delete: {
    tags: ["Posts"],
    summary: "Delete a post",
    security: [{ BearerAuth: [] }],
    parameters: [
      {
        in: "path",
        name: "id",
        required: true,
        schema: {
          type: "string",
        },
        description: "Post ID",
      },
    ],
    responses: {
      "200": {
        description: "Post deleted successfully",
      },
      "404": {
        description: "Post not found",
      },
      "403": {
        description: "Forbidden - User not authorized to delete this post",
      },
    },
  },
} as const;
