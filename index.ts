import "dotenv/config";
import configDB from "./src/config/configDB";
import server from "./server";

const PORT = process.env.PORT || 3000;

configDB()
  .then((res: any) => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: any) => console.log("error en el servidor", error.message));
