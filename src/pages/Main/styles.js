import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  height: 100vh;
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

export const BottomContainer = styled.footer`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
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
    (props.active &&
      props.work &&
      css`
        background: rgb(102, 74, 235);
        background: linear-gradient(
          142deg,
          rgba(102, 74, 235, 1) 0%,
          rgba(125, 97, 245, 1) 100%
        );
      `) ||
    (props.active &&
      props.relax &&
      css`
        background: rgb(74, 235, 109);
        background: linear-gradient(
          142deg,
          rgb(74, 235, 146) 0%,
          rgb(97, 245, 129) 100%
        );
      `) ||
    (props.active &&
      props.coffee &&
      css`
        background: rgb(235, 223, 74);
        background: linear-gradient(
          142deg,
          rgb(195, 235, 74) 0%,
          rgb(229, 245, 97) 100%
        );
      `)}

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
