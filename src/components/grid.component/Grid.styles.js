import styled from "styled-components";

import { colors } from "../../colors/colors";

const { blue } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;
export const Rows = styled.div``;
export const NodeContainer = styled.div``;

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 40vw;
  color: ${blue};
  margin: 0 auto;
  margin-top: 1rem;
  height: 1.1rem;
  border: 2px solid ${blue};
  outline: none;
  opacity: 0.95;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.1rem;
    height: 1.1rem;
    background: ${blue};
    cursor: pointer;
  }
`;
