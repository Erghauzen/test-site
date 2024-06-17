import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

interface CardProps {
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

interface FlexBoxProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
}

interface InputProps {
  marginRight?: string;
}

interface ButtonProps {
  marginTop?: string;
  backgroundColor?: string;
  color?: string;
  cursor?: string;
  pointerEvents?: string;
}

 const Card = styled.div<CardProps>`
  padding: ${({ padding }) => padding || '18px 20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

 const FlexBoxRow = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap || '10px'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

 const FlexBoxCol = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  gap: ${({ gap }) => gap || '10px'};
`;

 const Input = styled.input<InputProps>`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;
  margin-right: ${({ marginRight }) => marginRight || '0'};
`;

 const Button = styled.button<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'var(--tg-theme-button-color)'};
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  color: ${({ color }) => color || 'var(--tg-theme-button-text-color)'};
  font-weight: 700;
  cursor: ${({ cursor }) => cursor || 'pointer'};
  pointer-events: ${({ pointerEvents }) => pointerEvents || 'inherit'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
`;

const SquarePanel = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 10px;
  margin: 10px;
`;

function App() {
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            {network? (
              network === CHAIN.MAINNET? (
                <span>mainnet</span>
              ) : (
                <span>testnet</span>
              )
            ) : (
              <span>Not connected</span>
            )}
          </FlexBoxRow>
          <TransferTon />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}




export default App;
