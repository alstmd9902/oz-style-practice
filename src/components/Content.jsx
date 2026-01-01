import styled from "styled-components";
import { flexMixin, fontMixin, gray, tagColor } from "../style";

const StyledContainer = styled.div`
  /* @include flex($direction: column, $align: flex-start, $gap: 5px); */
  ${flexMixin({ direction: "column", align: "flex-start", gap: "5px" })}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    /* @include font($size: 12px); */
    ${fontMixin("12px")}
    color: ${tagColor};
    border: 1px solid ${tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    /* @include font($size: 18px, $weight: 600); */
    ${fontMixin("12px", "600")}
  }
  p {
    /* @include font($size: 12px); */
    ${fontMixin("12px")}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyledContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContainer>
  );
}
