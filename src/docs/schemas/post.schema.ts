export const postSchema = {
  Post: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "Post ID",
        example: "507f1f77bcf86cd799439011",
      },
      content: {
        type: "string",
        description: "Content of the post",
        example: "This is a sample post content",
      },
      imageUrl: {
        type: "string",
        description: "URL of the post image",
        example: "https://example.com/image.jpg",
      },
      user: {
        type: "string",
        description: "ID of the user who created the post",
        example: "507f1f77bcf86cd799439012",
      },
      likes: {
        type: "number",
        description: "Number of likes on the post",
        default: 0,
        example: 42,
      },
      comments: {
        type: "number",
        description: "Number of comments on the post",
        default: 0,
        example: 15,
      },
      status: {
        type: "string",
        enum: ["active", "deleted", "pending"],
        default: "active",
        description: "Current status of the post",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Creation timestamp",
        example: "2024-02-11T12:00:00Z",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Last update timestamp",
        example: "2024-02-11T14:30:00Z",
      },
    },
    required: ["content", "user"],
  },
};
