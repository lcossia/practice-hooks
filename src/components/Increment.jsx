import React from 'react';
import PropTypes from 'prop-types';

// React.memo se utiliza para memorizar un componente y evitar que se renderice de nuevo si sus props no cambian
export const Increment = React.memo(({ increment }) => {

    // Se ejecuta cada vez que se renderiza el componente
    console.log('Render <Increment />');

    return (
        <>
            <button onClick={() => increment(10)}>+10</button>
        </>
    )
}
);


Increment.propTypes = {
    increment: PropTypes.func.isRequired,
};
