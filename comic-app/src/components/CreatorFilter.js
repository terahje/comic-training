import React from "react";
import PropTypes from 'prop-types'
import Select from 'react-select'

export default function Filter ({setFilter, filter}) {
    const creatorOptions = [
        { label: 'Stan Lee', value: '30' },
        { label: 'Kate Leth', value: '12787' },
        { label: 'Brian Michael Bendis', value: '24' },
        { label: 'Steve Ditko', value: '32' },
        { label: 'Jack Kirby', value: '196' },
    ]

    return ( 
        // <input onChange={(e) => setFilter(e.target.value)} value={filter}/>
        <Select options={creatorOptions}/>
     );
}


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}