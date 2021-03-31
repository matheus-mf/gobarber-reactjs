import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    height: 144px;
    background: #28262e;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -176px auto 0;

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;
  margin-bottom: 32px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border: 0;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`;
