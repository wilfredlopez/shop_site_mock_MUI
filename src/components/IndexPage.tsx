import React from "react";

import { products } from "../sample_data";
import Products from "./Products";

interface Props {
}

const IndexPage = (props: Props) => {
  return (
    <Products products={products} />
  );
};

export default IndexPage;
