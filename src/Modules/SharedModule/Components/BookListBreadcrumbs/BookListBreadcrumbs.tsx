import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import styles from "./booklistBreadcrumbs.module.css";
import { useNavigate } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ secendPath }) {
  const navigate = useNavigate();
  return (
    <div
      role="presentation"
      onClick={handleClick}
      className={`${styles.path} d-flex justify-content-center align-items-center`}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="#393280"
          to="/home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dashboard/home");
          }}
        >
          HOME
        </Link>

        <Typography color="#393280">{secendPath}</Typography>
      </Breadcrumbs>
    </div>
  );
}
