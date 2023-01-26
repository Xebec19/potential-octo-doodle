import React from "react";
import TextUI from "@/components/UI/TextUI";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import classes from "@/styles/Home.module.css";

const ProductList = (props) => {
  let { products } = props;

  return (
    <div className={classes.categoryWrapper}>
      {products &&
        products.map((product, index) => (
          <Card key={index} sx={{ maxWidth: 345, m: 1 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.product_image["String"]}
              title={product.product_name}
            />
            <CardContent>
              <TextUI gutterBottom variant="h5" component="div">
                {product.product_name}
              </TextUI>
              <TextUI variant="body2" color="text.secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus non dolore labore exercitationem sint eum culpa magni
                dolorem commodi soluta! Aspernatur minima, eos voluptas iste
                expedita illum corrupti ipsum sequi.
              </TextUI>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default React.memo(ProductList);
