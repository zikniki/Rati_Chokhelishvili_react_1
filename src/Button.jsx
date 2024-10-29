import React from 'react';

const Button = () => {
    return (
        <button style={{
            width: '305px',
            height: '45px',
            display: 'flex',
            padding: 'var(--spacing-150, 12px)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--spacing-100, 8px)',
            alignSelf: 'stretch',
            color: 'white',
            backgroundColor: '#333333'
        }}>
            GitHub
        </button>
    );
}

export default Button;