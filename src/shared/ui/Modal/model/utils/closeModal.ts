import { router } from "expo-router";

export const closeModal = (onClose?: (close: () => void) => void) => {
  const isPresented = router.canGoBack();

  if (onClose) {
    onClose?.(() => {
      if (isPresented) {
        router.navigate("../");
      }
    });
    return;
  }

  if (isPresented) {
    router.navigate("../");
  }
};
