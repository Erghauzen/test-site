import styled from 'styled-components';

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


import React, { useState } from "react";

function ConnectionStatus() {
  const [status, setStatus] = useState("Not connected");

  function handleConnect() {
    setStatus("Connected");
  }

  return (
    <div>
      <button onClick={handleConnect}>Connect</button>
      <p>{status}</p>
    </div>
  );
}

