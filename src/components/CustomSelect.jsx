import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: `var(--color-ui-base)`,
            color: `var(--color-text)`,
            borderRadius: `var(--radii)`,
            padding: '0.25rem',
            border: 'none',
            bocShadow: `var(--shadow)`,
            heigth: '50px',
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--color-text)',
            backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
        }),
    },
})`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;

    & > * {
        box-shadow: var(--shadow);
        color: var(--colors-text) !important;
    }

    & > input {
        padding-left: 0.2rem;
    }

    & > div[id] {
        background-color: var(--colors-ui-base);
    }
`;
