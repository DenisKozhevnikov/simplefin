import { Switch, SwitchProps } from "react-native";
import { useThemeColor } from "../../lib/theme";

type ThemedSwitchProps = SwitchProps;

export const ThemedSwitch = ({ ...rest }: ThemedSwitchProps) => {
  const trackOn = useThemeColor({}, "accent");
  const trackOff = useThemeColor({}, "border");
  const thumb = useThemeColor({}, "background");
  const iosBg = useThemeColor({}, "border");

  return (
    <Switch
      trackColor={{ false: trackOff, true: trackOn }}
      thumbColor={thumb}
      ios_backgroundColor={iosBg}
      {...rest}
    />
  );
};
