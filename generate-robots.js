import path from "path";
import fs from "fs";

const env = process.env.NODE_ENV || "production";

const sourceFile = env === "development" ? "robots.dev.txt" : "robots.prod.txt";
const sourcePath = path.join(__dirname, "public", "robots", sourceFile);
const destinationPath = path.join(__dirname, "public", "robots.txt");

fs.copyFile(sourceFile, destinationPath, (err) => {
  if (err) {
    console.error("Error copying robots.txt", err);
  } else {
    console.log(`robots.txt generated for ${env} environment`);
  }
});
