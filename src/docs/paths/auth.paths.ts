export const authPaths = {
  "/auth/register": {
    post: {
      tags: ["Authentication"],
      summary: "Register a new user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                },
                password: {
                  type: "string",
                  format: "password",
                },
              },
              required: ["username", "password"],
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User successfully registered",
        },
      },
    },
  },
  "/auth/login": {
    post: {
      tags: ["Authentication"],
      summary: "Login user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  format: "string",
                },
                password: {
                  type: "string",
                  format: "password",
                },
              },
              required: ["username", "password"],
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Login successful",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                  },
                  user: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
