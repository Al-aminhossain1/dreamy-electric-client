import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://radiant-shelf-47828.herokuapp.com/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>

            {
                tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;