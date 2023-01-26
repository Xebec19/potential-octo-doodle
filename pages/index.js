import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/UI/Layout";
import { Avatar, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextUI from "@/components/UI/TextUI";
import { Box } from "@mui/system";
import Link from "next/link";
import ProductList from "@/components/ProductList";

const inter = Inter({ subsets: ["latin"] });

// main page
function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>Khushi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <TextUI
            className={styles.center}
            variant="h3"
            gutterBottom
            component="div"
          >
            Categories
          </TextUI>
          <div className={styles.categoryWrapper}>
            {categories &&
              categories.map((category, index) => (
                <a key={index} href={"/categories/" + category.category_id}>
                  <Card sx={{ maxWidth: 345, m: 1 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={category.image_url["String"]}
                      title={category.category_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {category.category_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Possimus non dolore labore exercitationem sint eum
                        culpa magni dolorem commodi soluta! Aspernatur minima,
                        eos voluptas iste expedita illum corrupti ipsum sequi.
                      </Typography>
                    </CardContent>
                  </Card>
                </a>
              ))}
          </div>

          <Divider sx={{ mt: 1, mb: 1 }} />

          <TextUI
            className={styles.center}
            variant="h3"
            gutterBottom
            component="div"
          >
            Products
          </TextUI>
          <ProductList products={products} />
        </Layout>
      </main>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  // const res = await fetch("https://api.github.com/repos/vercel/next.js");
  let categories = [],
    products = [];
  let baseUrl = process.env.NEXT_APP_BASE_URL;
  // fetch products
  let request = await fetch(baseUrl + "/product/v1/list?page=0&size=10");

  let response = await request.json();
  if (response.status) {
    products = response.data;
  }

  // fetch categories
  request = await fetch(baseUrl + "/category/v1/list");
  response = await request.json();

  if (response.status) {
    categories = response.data;
  }

  return { categories, products };
};

export default Home;
