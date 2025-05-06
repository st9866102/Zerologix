import React from 'react';

interface ButtonComponentProps {
  label: string;
  onClick: () => void;
  styleType?: 'primary' | 'secondary';
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, onClick, styleType = 'primary' }) => {
  const styles = {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'gray',
      color: 'black',
    },
  };

  return (
    <button onClick={onClick} style={styles[styleType]}>
      {label}
    </button>
  );
};

export default ButtonComponent; 