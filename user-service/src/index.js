import app from "./server";

function main() {
  app.listen(app.get("PORT"));
  console.log("Server on port " + app.get("PORT"));
}

main();
