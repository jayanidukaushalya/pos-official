import { createContext } from "react";

type ProductUpdatedNotificationProps = {
  notify: boolean;
  handleNotify: () => void;
};

export const ProductUpdateContext =
  createContext<ProductUpdatedNotificationProps>({
    notify: false,
    handleNotify: () => {
      // TODO: Implement handleNotify functionality
    },
  });
