import { createContext } from "react";

type StockUpdatedNotificationProps = {
  notify: boolean;
  handleNotify: () => void;
};

export const StockUpdateContext = createContext<StockUpdatedNotificationProps>({
  notify: false,
  handleNotify: () => {
    // TODO: Implement handleNotify functionality
  },
});
