export const userSchema = {
  User: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "User ID",
      },
      username: {
        type: "string",
      },
      password: {
        type: "string",
        format: "password",
      },
      posts: {
        type: "array",
        description: "List of user's posts",
      },
    },
    required: ["username", "password"],
  },
};
