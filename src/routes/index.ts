import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import authRouter from "./authRouter";
import postRouter from "./postRouter";
import userRouter from "./userRouter";

const router = Router();
// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info:
  title: Blog API with Authentication
  description: API for user authentication and post management
  version: 1.0.0
servers:
  - url: http://localhost:3000
    description: Development server

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT
    

  apis: ["./src/routes/*.ts"], // Ruta donde están los archivos con anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Ruta de Swagger UI
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use("/auth", authRouter);
router.use("/posts", postRouter);
router.use("/users", userRouter);
router.get("/try", async (req, res) => {
  res.json({ message: "trying" });
});

export default router;
