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

export const Card = styled.div<CardProps>`
  padding: ${({ padding }) => padding || '18px 20px'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
`;

export const FlexBoxRow = styled.div<FlexBoxProps>`
  display: flex;
  justify-content: flex-end;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap || '10px'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
`;

export const FlexBoxCol = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  gap: ${({ gap }) => gap || '10px'};
`;

export const Input = styled.input<InputProps>`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;
  margin-right: ${({ marginRight }) => marginRight || '0'};
`;

export const Button = styled.button<ButtonProps>`
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

// Размеры кнопок выражаются в процентах при помощи vw и vh
export const SquarePanelLeft = styled.div` 
  width: 30vw; 
  height: 20vh;
  background-color: #C0C0C0;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content:  space-between; 
  padding-left: 60px;

  @media (max-width: 100px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;

export const SquarePanelRight = styled.div`
  width: 30vw;
  height: 20vh; 
  background-color: #C0C0C0;
  border-radius: 3px;
  display: flex; 
  align-items: center;
  justify-content: center; 
  padding-right: 80px; 

  @media (max-width: 100px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }
`;


export const NFTCollectionButton = () => {
  return (
    <SquarePanelLeft>
      <span style={{
        fontFamily: 'VIVL Rail, sans-serif', // используем VIVL Rail, если он установлен, иначе sans-serif
        fontSize: "12px",
        fontWeight: "bold", // делаем шрифт жирным
        paddingLeft: "40px" // добавляем отступ слева для значка
      }}>
        «Your<br />
        NFT<br />
        Coll-<br />
        ection»
      </span>
    </SquarePanelLeft>
  );
};

export const NFTButton = () => {
  return (
    <SquarePanelRight>
      <span style={{
        fontFamily: 'VIVL Rail, sans-serif',
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        «NFT's»
      </span>
    </SquarePanelRight>
  );
};

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
              <TonConnectButton/>
            )}
          </FlexBoxRow>
          <FlexBoxRow>
            <NFTCollectionButton />
            <NFTButton />
          </FlexBoxRow>
          <TransferTon />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
