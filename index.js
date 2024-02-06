// import { web } from "./app/application/web.js";
import { web } from "./app/application/web.js";

const port = 8080;

web.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
