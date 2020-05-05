import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CounterContainer = styled.div`
  background: #3f4360;
  width: 70%;
  padding: 70px;
  margin-bottom: 40px;

  border-radius: 50%;
  box-shadow: inset 1px 2px #ffffff0a, 11px 8px 20px #00000026,
    -4px -3px 20px #ffffff0d;
`;

export const TimeNum = styled.time`
  font-size: 36px;
  margin-bottom: -15px;
`;

export const TimeText = styled.span`
  font-size: 18px;
  text-transform: lowercase;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentTitle = styled.span`
  font-size: 26px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const ActionButton = styled.button`
  ${(props) =>
    props.active
      ? css`
          background: rgb(102, 74, 235);
          background: linear-gradient(
            142deg,
            rgba(102, 74, 235, 1) 0%,
            rgba(125, 97, 245, 1) 100%
          );
        `
      : css`
          background: rgb(70, 76, 110);
          background: linear-gradient(
            142deg,
            rgba(70, 76, 110, 1) 0%,
            rgba(58, 63, 91, 1) 100%
          );
        `}

  width: 12px;
  height: 12px;
  border-radius: 50%;

  box-shadow: inset 1px 1px 7px #ffffff2e, 11px 8px 20px #00000026,
    -4px -3px 20px #ffffff0d;

  & + button {
    margin-left: 15px;
  }
`;

export const PlayStopContent = styled.div``;