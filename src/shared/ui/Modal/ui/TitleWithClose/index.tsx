import { TouchableOpacity, View } from "react-native";
import { ThemedIcon } from "../../../ThemedIcon";
import { ThemedText } from "../../../ThemedText";
import { closeModal } from "../../model/utils/closeModal";

type TitleWithCloseProps = {
  title: string | React.JSX.Element;
  onClose?: (handleClose: () => void) => void;
};

export const TitleWithClose = ({ title, onClose }: TitleWithCloseProps) => {
  const handlePresslose = () => {
    closeModal(onClose);
  };

  return (
    <View style={[{ flexDirection: "row", alignItems: "center" }]}>
      <ThemedText
        style={{
          flexShrink: 1,
        }}
        typography="text18"
        weight={700}
      >
        {title}
      </ThemedText>
      <TouchableOpacity
        onPress={handlePresslose}
        hitSlop={40}
        style={[{ marginLeft: "auto" }]}
      >
        <ThemedIcon name="close" />
      </TouchableOpacity>
    </View>
  );
};
