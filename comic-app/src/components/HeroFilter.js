import React from "react";
import PropTypes from 'prop-types'
import Select from 'react-select'

export default function Filter ({setFilter, filter}) {
    const heroOptions = [
        { label: 'Iron Man', value: '1009368' },
        { label: 'Captain America', value: '1009220' },
        { label: 'Thor', value: '1009664' },
        { label: 'Deadpool', value: '1009268' },
        { label: 'Scarlet Witch', value: '1009562' },
        { label: 'Black Widow', value: '1009189' },
        { label: 'Wasp', value: '1009707' },
        { label: 'Gamora', value: '1010763' },
    ]

    return ( 
        // <input onChange={(e) => setFilter(e.target.value)} value={filter}/>
        <Select options={heroOptions}/>
     );
}


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}