import ProductList from "@/components/ProductList";
import AvatarUI from "@/components/UI/AvatarUI";
import Layout from "@/components/UI/Layout";
import PaperUI from "@/components/UI/PaperUI";
import TextUI from "@/components/UI/TextUI";
import classes from "@/styles/category.module.css";

const CategoryPage = ({ category, products }) => {
  return (
    <>
      <Layout>
        <PaperUI className={classes.categoryContainer}>
          <AvatarUI
            alt={category.category_name}
            src={category.image_url.String}
            className={classes.categoryLogo}
            sx={{ width: 300, height: 300 }}
          />
          <TextUI variant="h3" component="div" sx={{ m: 3 }}>
            {category.category_name}
          </TextUI>
        </PaperUI>
        <TextUI variant="h3" component="div" sx={{ textAlign: "center", m: 3 }}>
          Products
        </TextUI>
        <ProductList products={products} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  let baseUrl = process.env.NEXT_APP_BASE_URL;
  let { categoryId } = context.query;

  let products = [],
    category = {};

  let url = `${baseUrl}/category/v1/details/${categoryId}`;

  // get category details
  let request = await fetch(url);

  let data = await request.json();

  if (data.status) {
    category = data.data;
  }

  url = baseUrl + `/product/v1/category/${categoryId}?page=0&size=1`;

  // get products of a category
  request = await fetch(url);
  data = await request.json();

  if (data.status) {
    products = data.data;
  }

  return {
    props: {
      category,
      products,
    },
  };
}

export default CategoryPage;
