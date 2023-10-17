import { listen } from "express/lib/application";
import app from "./app"
const cors = require('cors');

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Port: ${app.get("port")}`);
};

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

main();