import {
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Stack,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";
import DeleteProductDialog from "../component/DeleteProductDialog";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Loader from "../component/Loader";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar
} from "../store/slices/snackbarSlice";
import { fallbackImage } from "../constants/general.costants";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [orderedQuantity, setOrderedQuantity] = useState(1);

  const navigate = useNavigate();
  const params = useParams();
  const productId = params?.id;

  const queryClient = useQueryClient();

  // get user role
  const userRole = localStorage.getItem("role");

  // fetch product details
  const { isPending, data } = useQuery({
    queryKey: ["get-product-detail"],
    queryFn: async () => {
      return await $axios.get(`/product/details/${productId}`);
    }
  });

  const productDetail = data?.data?.productDetail;

  // add to cart api hit
  const { isPending: addItemToCartPending, mutate } = useMutation({
    mutationKey: ["add-item-to-cart"],
    mutationFn: async () => {
      return await $axios.post("/cart/item/add", {
        productId,
        orderedQuantity
      });
    },

    onSuccess: (res) => {
      queryClient.invalidateQueries("get-cart-item-count");
      navigate("/cart");
      dispatch(openSuccessSnackbar(res?.data?.message));
    },
    onError: (error) => {
      dispatch(openErrorSnackbar(error?.response?.data?.message));
    }
  });

  if (isPending || addItemToCartPending) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "6rem",
        mt: "5rem",
        width: "100%",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger
        gap: { xs: "2rem", sm: "4rem" } // Adjust gap on smaller screens
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "50%",
          mb: { xs: "2rem", sm: 0 }, // Margin at the bottom for smaller screens
          flex: 1
        }}
      >
        <img
          src={productDetail?.image || fallbackImage}
          alt="product"
          style={{
            width: "90%",
            maxWidth: "400px", // Limit the size of the image
            height: "auto"
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1rem",
          flex: 1
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          {productDetail.name}
        </Typography>
        <Chip
          label={productDetail.brand}
          variant="outlined"
          color="success"
          sx={{ fontSize: "1rem" }}
        />
        <Typography sx={{ textAlign: "justify" }}>
          {productDetail.description}
        </Typography>
        <Typography variant="h6">Price: Rs.{productDetail.price}</Typography>

        <Chip
          variant="outlined"
          color="success"
          label={productDetail.category}
          sx={{ fontSize: "1rem", textTransform: "capitalize" }}
        />

        <Typography variant="h6">
          Available quantity: {productDetail.availableQuantity}
        </Typography>

        <Stack direction="row" spacing={4} sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6">Free shipping</Typography>
          <Chip
            variant="outlined"
            color={productDetail.freeShipping ? "success" : "error"}
            label={productDetail.freeShipping ? "Yes" : "No"}
            sx={{ fontSize: "1rem" }}
          />
        </Stack>

        {userRole !== "admin" && userRole !== "user" && (
          <>
            <Typography sx={{ fontWeight: "bold" }}>
              Please login to buy product
            </Typography>
            <Button
              sx={{ color: "#fff", fontWeight: "bold" }}
              onClick={() => {
                navigate("/login");
              }}
              variant="contained"
              color="success"
            >
              Login
            </Button>
          </>
        )}

        {userRole === "admin" && (
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
              fullWidth
              onClick={() => {
                navigate(`/product-edit/${productDetail._id}`);
              }}
            >
              Edit
            </Button>
            <DeleteProductDialog />
          </Stack>
        )}

        {userRole === "user" && (
          <>
            <Stack direction="row" spacing={2}>
              <IconButton
                disabled={orderedQuantity === 1}
                onClick={() => {
                  setOrderedQuantity((prev) => prev - 1);
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h4">{orderedQuantity}</Typography>
              <IconButton
                disabled={orderedQuantity === productDetail?.availableQuantity}
                onClick={() => {
                  setOrderedQuantity((prev) => prev + 1);
                }}
              >
                <AddIcon />
              </IconButton>
            </Stack>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                mutate();
              }}
            >
              Add to cart
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;