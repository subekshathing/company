import React from "react";
import OrderSummary from "../component/OrderSummary";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";
import CartItemTable from "../component/CartItemTable";
import KeepShopping from "../component/KeepShoping";
import theme from "../theme/theme";

const Cart = () => {
  // Get cart items
  const { isPending, data } = useQuery({
    queryKey: ["get-cart-item-list"],
    queryFn: async () => {
      return await $axios.get("/cart/item/list");
    }
  });

  const cartData = data?.data?.cartData;
  const orderSummary = data?.data?.orderSummary;

  if (isPending) {
    return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile, horizontally on larger screens
        gap: { xs: "1rem", sm: "2rem" }, // Adjust gap between elements depending on screen size
        alignItems: "center",
        width: "100%",
        margin: { xs: "2rem 0", sm: "4rem 0" }, // Adjust margins based on screen size
        padding: { xs: "1rem", sm: "2rem" }, // Add padding for mobile
        justifyContent: "center"
      }}
    >
      {/* If no cart data, show KeepShopping component */}
      {cartData?.length === 0 ? (
        <KeepShopping />
      ) : (
        <>
          {/* Cart Items Table */}
          <Box
            sx={{
              flex: 1, // Ensure CartItemTable takes remaining space
              width: "100%",
              overflowX: "auto" // Ensures table scrolls on smaller screens
            }}
          >
            <CartItemTable cartData={cartData} />
          </Box>

          {/* Order Summary Section */}
          <Box
            sx={{
              flex: 1,
              minWidth: { xs: "100%", sm: "300px" }, // Ensure Order Summary is responsive
              width: "100%",
              mt: { xs: "1rem", sm: 0 } // Margin-top adjustment for mobile screens
            }}
          >
            <OrderSummary orderSummary={orderSummary} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
