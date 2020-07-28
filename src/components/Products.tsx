import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { IProduct } from "../models/IProduct";
import ProductItem from "./ProductItem";
import ProductPagination from "./shared/ProductPagination";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    gridCustom: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
    },
    gridItemCustom: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "1rem",
      },
    },
  })
);

interface Props {
  products: IProduct[];
}

const Products = ({ products }: Props) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(1);
  const media = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up("sm");
  });

  return (
    <Grid
      container
      spacing={media ? 3 : 0}
      alignItems="center"
      alignContent="center"
      className={classes.gridCustom}
    >
      {products.map((p) => {
        return <Grid
          zeroMinWidth
          xs={12}
          key={p._id}
          item
          sm="auto"
          md={3}
          className={classes.gridItemCustom}
        >
          <ProductItem product={p} />
        </Grid>;
      })}
      <Grid item xs={12}>
        <ProductPagination
          count={100}
          currentPage={currentPage}
          handleChange={(event, page) => {
            console.log("page changed", page);
            setCurrentPage(page);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Products;
