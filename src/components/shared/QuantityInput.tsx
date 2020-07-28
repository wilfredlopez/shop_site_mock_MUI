import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  quantityInputRoot: {
    width: 80,
  },
});
type Props = TextFieldProps & {};

const QuantityInput = ({ ref, ...props }: Props) => {
  const classes = useStyles();
  return <TextField
    {...props}
    ref={ref}
    type="number"
    size="small"
    inputProps={{
      style: {
        textAlign: "center",
      },
    }}
    variant={"outlined"}
    className={classes.quantityInputRoot}
  />;
};

export default QuantityInput;
