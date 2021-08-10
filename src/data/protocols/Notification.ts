import { Dispatch, SetStateAction } from "react";

export interface INotificationContext {
  notification: INotification | null;
  setNotification: Dispatch<SetStateAction<INotification | null>>;
}

export interface INotification {
  body?: string | undefined;
  title?: string | undefined;
}
