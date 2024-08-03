import React, { useEffect, useState } from "react";
import TopHeader from "../../../SharedModule/Components/TopHeader/TopHeader";
import BasicBreadcrumbs from "../../../SharedModule/Components/BookListBreadcrumbs/BookListBreadcrumbs";
import TextField from "@mui/material/TextField";
import SharedNavBar from "../../../SharedModule/Components/SharedNavBar/SharedNavBar";
import Autocomplete from "@mui/material/Autocomplete";
import ReorderIcon from "@mui/icons-material/Reorder";
import WindowIcon from "@mui/icons-material/Window";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import bookImg1 from "../.././../../assets/books/cover1.jpg";
import bookImg2 from "../.././../../assets/books/cover2.jpg";
import bookImg3 from "../.././../../assets/books/cover3.jpg";
import axios from "axios";
import BookItem from "../../../SharedModule/Components/BookItem/BookItem";
import Footer from "../../../SharedModule/Components/Footer/Footer";
import styles from "./BooksList.module.css";
import AccordionModel from "../../../SharedModule/Components/AccordionModel/AccordionModel";
import FlitrationModel from "../../../SharedModule/FlitrationModel/FlitrationModel";
export default function BooksList() {
  const randomImage = () => {
    const images = [bookImg1, bookImg3, bookImg2];
    return images[Math.floor(Math.random() * images.length)];
  };
  const options = ["Alphabetically, A-Z", "Alphabetically, Z-A"];
  const ShowOptions = [3, 6, 9];

  const [booksList, setBooksList] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalBooks, setTotalBooks] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/book",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
          params: {
            page,
            limit,
            search: searchTerm,
          },
        }
      );

      setBooksList(response.data.data);
      setTotalBooks(response.data.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, [page, limit, searchTerm]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleLimitChange = (event, newValue) => {
    setLimit(newValue);
    setPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setPage(1);
    getAllBooks();
  };

  return (
    <>
      <TopHeader />
      <SharedNavBar />
      <BasicBreadcrumbs />

      {/* <div className="p-3">
        <div className="row p-3">
          <div className="col-md-2  justify-content-center">
            <TextField
              id="outlined-basic"
              label="Search "
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{ width: 250, mb: 2 }}
            />

            <Accordion
              sx={{
                pt: 1,
                pb: 1,
                mb: 2,
                width: 250,
                color: "#393280",
                fontWeight: 600,
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#393280", fontWeight: 600 }} />
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Price
              </AccordionSummary>
              <AccordionDetails>
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="" className={`${styles.label} me-2`}>
                      $
                    </label>
                    <input type="text" className="w-75" type="number" />
                  </div>
                  <div className="col-md-2 mt-1">TO</div>
                  <div className="col-md-5">
                    <label htmlFor=" " className={` me-2 ${styles.label}`}>
                      $
                    </label>
                    <input type="text" className="w-75" />
                  </div>
                </div>
                <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
                  Filter
                </Button>
              </AccordionDetails>
            </Accordion>
            <AccordionModel title={"Product type"} />
            <AccordionModel title={"Availability"} />
            <AccordionModel title={"Brand"} />
          </div>
          <div className="col-md-10 m-auto">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center px-5">
                <p
                  className="me-3 mt-1"
                  style={{ color: "#393280", fontWeight: 700 }}
                >
                  Sort by :
                </p>
                <Autocomplete
                  disablePortal
                  id="sort-selector"
                  options={options}
                  sx={{ width: 240 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div className="col-md-3 d-flex align-items-center">
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ color: "#393280", fontWeight: 600 }}
                >
                  Showing {Math.min((page - 1) * limit + 1, totalBooks)} -{" "}
                  {Math.min(page * limit, totalBooks)} of {totalBooks} results
                </Typography>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <p
                  className="me-3 mt-1"
                  style={{ color: "#393280", fontWeight: 700 }}
                >
                  Show :
                </p>
                <Autocomplete
                  disablePortal
                  id="limit-selector"
                  options={ShowOptions}
                  onChange={(event, newValue) =>
                    handleLimitChange(event, newValue)
                  }
                  sx={{ width: 100 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <WindowIcon sx={{ mr: 5, color: "#ED553B" }} />
                <ReorderIcon />
              </div>
            </div>
            <div className="container my-3">
              <div className="row">
                {booksList.map((book, index) => (
                  <div className="col-md-4 mt-2" key={index}>
                    <BookItem book={book} randomImage={randomImage} />
                  </div>
                ))}

                <div className="my-4 d-flex justify-content-center">
                  <Stack spacing={2}>
                    <Pagination
                      count={Math.ceil(totalBooks / limit)}
                      size="large"
                      page={page}
                      onChange={handlePageChange}
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <FlitrationModel />
      <Footer />
    </>
  );
}
