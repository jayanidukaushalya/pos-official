import { createContext } from "react";

type ProductAddedNotificationProps = {
  notify: boolean;
  handleNotify: () => void;
};

export const ProductUpdateContext =
  createContext<ProductAddedNotificationProps>({
    notify: false,
    handleNotify: () => {
      // TODO: Implement handleNotify functionality
    },
  });
