import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

import React from 'react';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    aligh-items: center;
    
    border-radius: var(--raii);
    boc-shadow: var(--shadow);
    width: 100%;
    max-width: 280px;
    margin-bottom: 1rem;

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px:
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
`;

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
    );
};
