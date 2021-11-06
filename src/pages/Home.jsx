import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { ALL_COUNTRIES } from '../components/config';

export const Home = ({ countries, setCountries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries);

    const { push } = useHistory();

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((el) => el.region.includes(region));
        }

        if (search) {
            data = data.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCountries(data);
    };

    useEffect(() => {
        if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }, []);

    useEffect(() => {
        handleSearch();
    }, [countries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((el, index) => {
                    const countryInfo = {
                        img: el.flags.png,
                        name: el.name,
                        info: [
                            {
                                title: 'population',
                                description: el.population.toLocaleString(),
                            },
                            {
                                title: 'region',
                                description: el.region.toLocaleString(),
                            },
                            {
                                title: 'capital',
                                description: el.capital.toLocaleString(),
                            },
                        ],
                    };

                    return (
                        <Card
                            key={index}
                            {...countryInfo}
                            onClick={() => push(`/country/${el.name}`)}
                        />
                    );
                })}
            </List>
        </>
    );
};
