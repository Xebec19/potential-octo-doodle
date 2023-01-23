import { useRouter } from "next/router";

const CategoryPage = ({ data }) => {
  const router = useRouter();
  console.log(router.query.categoryId);
  console.log(data);
  return <h1>Category is working!</h1>;
};

export async function getServerSideProps() {
  let baseUrl = process.env.NEXT_APP_BASE_URL;

  let request = await fetch(baseUrl + "/category/v1/details/1");
  let data = await request.json();

  return {
    props: {
      data,
    },
  };
}

export default CategoryPage;
