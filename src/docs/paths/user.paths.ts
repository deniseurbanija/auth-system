export const userPaths = {
  "/users": {
    get: {
      tags: ["Users"],
      summary: "Get all users",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "List of users retrieved successfully",
        },
        "401": {
          description: "Unauthorized - Invalid or missing token",
        },
      },
    },
  },
  "/users/{id}": {
    get: {
      tags: ["Users"],
      summary: "Get user by ID",
      security: [{ BearerAuth: [] }],
      responses: {
        "200": {
          description: "User retrieved successfully",
        },
        "404": {
          description: "User not found",
        },
      },
    },
    delete: {
      tags: ["Users"],
      summary: "Delete user",
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
          description: "User ID",
        },
      ],
      responses: {
        "200": {
          description: "User deleted successfully",
        },
        "404": {
          description: "User not found",
        },
      },
    },
  },
};
