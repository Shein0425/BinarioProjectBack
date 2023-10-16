import { listen } from "express/lib/application";
import app from "./app"

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Port: ${app.get("port")}`);
};

main();