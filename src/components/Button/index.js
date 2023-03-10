import Text from "../Text";
import IconComponent from "./IconComponent";
import Button from "./styles";

function ButtonComponent(props) {
  const {
    children,
    iconLeft = null,
    iconRight = null,
  } = props;

  return (
    <Button {...props}>
      <IconComponent svgSrc={iconLeft} />
      <Text>{children}</Text>
      <IconComponent svgSrc={iconRight} />
    </Button>
  )
};

export default ButtonComponent;
