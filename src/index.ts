import app from "./app";
import {connectDB} from "./db";
import {PORT} from "./config";

async function main() {
    try {
        await connectDB()
        app.listen(PORT);
    } catch (e) {
        console.error(e);
    }
}

main().then(() => console.log('Server started'));