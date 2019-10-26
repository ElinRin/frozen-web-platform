import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export const RadioButtons = () => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <div>
      <h5>Radio Buttons</h5>
      <ButtonGroup>
        <Button color="primary"
                onClick={() => setRSelected('Vacation')}
                active={rSelected === 1}
        >
          Vacation
        </Button>
        <Button color="primary"
                onClick={() => setRSelected('Sick leave')}
                active={rSelected === 1}
        >
          Sick leave
        </Button>
        <Button color="primary"
                onClick={() => setRSelected('Remote work')}
                active={rSelected === 1}
        >
          Remote work
        </Button>
      </ButtonGroup>
    </div>
  );
}
