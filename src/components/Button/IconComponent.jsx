import styled from "styled-components";

const BtnImg = styled.img`
  height: ${({theme}) => theme.lineHeight};

  &:first-child {
      margin-right: 6px;
  }

  &:last-child {
      margin-left: 6px;
  }
`;

function IconComponent ({svgSrc}) {
  if(svgSrc === null) return null;
  return <BtnImg src={svgSrc}/>
}

export default IconComponent;