import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { useHistory, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../components/config';
import { Info } from '../components/Info';
export const Details = () => {
    const { name } = useParams();
    const { push, goBack } = useHistory();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        axios
            .get(searchByCountry(name), { signal: signal })
            .then(({ data }) => setCountry(data[0]));
        return function cleanup() {
            console.log('I am in cleanup function');
            abortController.abort();
        };
    }, [name]);

    return (
        <>
            <Button onClick={() => goBack()}>
                <IoArrowBack />
                Back
            </Button>
            {country && <Info push={push} {...country} />}
        </>
    );
};
