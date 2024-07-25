import React from 'react';

export default function Logo({ text, textColor, backgroundColor, fontSize }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 50 50"
        >
            <circle
                cx="50%"
                cy="50%"
                r="25"
                fill={backgroundColor}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill={textColor}
                fontSize={fontSize}
                fontFamily="Arial"
                fontWeight="bold"
            >
                {text}
            </text>
        </svg>
    );
};
