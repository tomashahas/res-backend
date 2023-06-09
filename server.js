import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 9080;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('its working');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
