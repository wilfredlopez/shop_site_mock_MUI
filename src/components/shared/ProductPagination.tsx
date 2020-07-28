import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
        "& ul": {
          justifyContent: "center",
        },
      },
    },
  })
);

interface Props {
  count: number;
  handleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
}

export default function ProductPagination(
  { count, handleChange, currentPage }: Props,
) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        size="large"
        page={currentPage}
        onChange={handleChange}
        count={count}
        showFirstButton
        showLastButton
        color="primary"
        shape="rounded"
        siblingCount={2}
        boundaryCount={1}
      />
    </div>
  );
}
