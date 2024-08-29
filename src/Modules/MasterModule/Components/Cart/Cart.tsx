import TopHeader from "../../../SharedModule/Components/TopHeader/TopHeader";
import SharedNavBar from "../../../SharedModule/Components/SharedNavBar/SharedNavBar";
import BasicBreadcrumbs from "../../../SharedModule/Components/BookListBreadcrumbs/BookListBreadcrumbs";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CartDetails from "../../../SharedModule/Components/CartDetails/CartDetails";
import TotalCost from "../../../SharedModule/Components/TotalCost/TotalCost";
import Footer from "../../../SharedModule/Components/Footer/Footer";

export default function Cart() {
  return (
    <>
      <TopHeader />
      <SharedNavBar />
      <BasicBreadcrumbs secendPath={"CART"} />

      <section className="container my-5 ">
        <Grid container spacing={15}>
          <Grid item xs={12} md={7}>
            <CartDetails />
          </Grid>

          <Grid item xs={12} md={5}>
            <TotalCost />
          </Grid>
        </Grid>
      </section>

      <Footer />
    </>
  );
}
