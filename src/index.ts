import app from "./app";
import {connectDB} from "./db";

async function main() {
    try {
        await connectDB()
        app.listen(3000);
    } catch (e) {
        console.error(e);
    }
}

main().then(() => console.log('Server started'));