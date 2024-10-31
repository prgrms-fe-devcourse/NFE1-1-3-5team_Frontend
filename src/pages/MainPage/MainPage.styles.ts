import styled from "styled-components";

export const WriteButtonWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const CustomSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchBarWrapper = styled.div`
  // CustomSelect 와 동일하게 맞추기위함
  margin-bottom: 30px;
`;