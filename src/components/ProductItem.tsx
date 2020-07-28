import React from "react";
import { IProduct } from "../models/IProduct";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import QuantityInput from "./shared/QuantityInput";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: 500,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 345,
    },
  },
  description: {
    height: 20,
    marginBottom: 10,
  },
  productActions: {
    justifyContent: "center",
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: "bold",
  },
}));

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          height="210"
          image={product.images[0]}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h3"
            color="secondary"
          >
            ${product.price}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {product.description.slice(0, 50)}
            {product.description.length > 50 ? " ..." : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.productActions}>
        <Button
          size="small"
          variant="text"
          className={classes.quantityButton}
        >
          -
        </Button>
        <QuantityInput value={1} />
        <Button
          size="small"
          variant="text"
          className={classes.quantityButton}
        >
          +
        </Button>
      </CardActions>
      <CardActions className={classes.productActions}>
        <Button size="medium" color="primary" variant="contained">
          Add To Cart
        </Button>
        {/* <Button variant="contained" size="medium" color="secondary">
          Edit
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
