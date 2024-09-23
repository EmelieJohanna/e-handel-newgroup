import axios from "axios";
import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";

const generateSitemap = async () => {
  const products = await axios.get("https://fakestoreapi.com/products");

  const sitemap = new SitemapStream({
    hostname: "https://e-handel-newgroup.vercel.app",
  });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  const staticLinks = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/cart", changefreq: "yearly", priority: 0.5 },
  ];

  staticLinks.forEach((link) => sitemap.write(link));

  products.data.forEach((product) => {
    sitemap.write({
      url: `/product/${product.id}`,
      changefreq: "monthly",
      priority: 0.8,
    });
  });

  sitemap.end();

  writeStream.on("finish", () => {
    console.log("Sitemap generated successfully");
  });

  writeStream.on("error", (err) => {
    console.error("Error writing sitemap:", err);
  });
};

generateSitemap();
