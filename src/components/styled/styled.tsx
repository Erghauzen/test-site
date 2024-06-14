import styled from "styled-components";

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 8px;
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color)"};
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  position: absolute; 
  top: 0;
  right: 0;
  color: var(--tg-theme-button-text-color);
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }

  // Добавил стили для темной темы 
  ::placeholder {
    color: #fefefe; /* Цвет placeholder в светлой теме */
  }

  :-ms-input-placeholder {
    color: #fefefe; /* Internet Explorer/Edge */
  }

  ::-ms-input-placeholder {
    color: #fefefe; /* Microsoft Edge */
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    color: #fefefe; /* Для типа input 'date' в WebKit браузерах */
  }

  &[type="date"]::-webkit-datetime-edit,
  &[type="date"]::-webkit-datetime-edit-day-field,
  &[type="date"]::-webkit-datetime-edit-month-field,
  &[type="date"]::-webkit-datetime-edit-year-field {
    color: #fefefe; /* Для типа input 'date' в WebKit браузерах */
  }

  &[type="time"]::-webkit-clear-button {
    color: #fefefe; /* Для типа input 'time' в WebKit браузерах */
  }

  &[type="time"]::-webkit-inner-spin-button {
    color: #fefefe; /* Для типа input 'time' в WebKit браузерах */
  }

  &[type="time"]::-webkit-calendar-picker-indicator {
    color: #fefefe; /* Для типа input 'time' в WebKit браузерах */
  }

  &[type="datetime"]; 
  &[type="datetime"]::-webkit-clear-button,
  &[type="datetime"]::-webkit-inner-spin-button,
  &[type="datetime"]::-webkit-calendar-picker-indicator {
  color: #fefefe; /* Для типа input 'datetime' в WebKit браузерах */
  }
  #tonConnectButton {
  position: absolute;
  top: 0;
  right: 0;
}
  `;