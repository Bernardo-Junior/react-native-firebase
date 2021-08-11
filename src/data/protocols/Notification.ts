import { Dispatch, SetStateAction } from "react";

export interface INotificationContext {
  notification: INotification | null;
  setNotification: Dispatch<SetStateAction<INotification | null>>;
  notifications: INotificationStorage[];
  setNotifications: Dispatch<SetStateAction<INotificationStorage[]>>;
}

export interface INotification {
  body?: string | undefined;
  title?: string | undefined;
}

export interface INotificationStorage {
  id: number;
  body?: string | undefined;
  title?: string | undefined;
  date?: string | undefined;
}
