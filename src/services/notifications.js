import { info, error } from "@pnotify/core";
import "@pnotify/core/dist/Material.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const onShowInfoNotification = () => {
  info({
    title: "Invalid request",
    text: `The search field is empty!`,
    delay: 2000,
  });
};

const onShowErrorNotification = () => {
  error({
    title: "Invalid request",
    text: `Нап жаль, нічого не знайдено за вашим запитом :(, спробуйте інший!`,
    delay: 2000,
  });
};

export { onShowInfoNotification, onShowErrorNotification };
