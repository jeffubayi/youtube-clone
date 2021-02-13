import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 18rem 80vh;
  letter-spacing: 2rem;
  color: turqoise;
  text-shadow: 0 0px 10px, 0 0 1em #560a86, 0 0 0.5em #560a86, 0 0 0.1em #560a86,
    0 10px 3px #333;
  animation: flicker linear infinite 2s;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;

  @keyframes flicker {
    75% {
      color: inherit;
      text-shadow: inherit;
    }
    76% {
      color: #222;
    }
    77% {
      color: inherit;
      text-shadow: none;
    }
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79% {
      color: #222;
      text-shadow: none;
    }
    80% {
      color: inherit;
      text-shadow: inherit;
    }
    90% {
      color: #222;
      text-shadow: none;
    }
    90.5% {
      color: inherit;
      text-shadow: inherit;
    }
  }
`;
