const validateWarrantyDate = (warrantyDate: Date) => {
  const today = new Date();
  const selectedDate = new Date(warrantyDate);

  if (selectedDate <= today) {
    return "Warranty date must be after today";
  }

  return true;
};

const validateSellingPrice = (value: any, values: any) => {
  const unformattedSellingPrince =
    parseFloat(value.replace("Rs. ", "").replace(/,/g, "")) || 0;

  const unformattedBuyingPrince =
    parseFloat(values.buyingPrice.replace("Rs. ", "").replace(/,/g, "")) || 0;

  if (unformattedSellingPrince <= unformattedBuyingPrince) {
    return "Selling Price must be greater than Buying Price";
  }

  return true;
};

const validateQty = (value: any) => {
  const unformattedQty = parseInt(value.replace("PCS ", "").replace(/,/g, ""));

  if (unformattedQty <= 0) {
    return "Stock Quantity is required !";
  }

  return true;
};

export { validateSellingPrice, validateQty, validateWarrantyDate };
