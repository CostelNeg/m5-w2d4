import { useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
<>
        <Alert show={show} variant="primary">
          <Alert.Heading className="d-flex justify-content-center">
            La Libreria Online
          </Alert.Heading>
          <p className="d-flex justify-content-center">
            Benvenuto nella nostra Libreria, qui troverai tutto quello di qui
            hai bisogno(o quasi...)
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Chiudi Area
            </Button>
          </div>
        </Alert>
        <div className="d-flex justify-content-center">
          {!show && <Button onClick={() => setShow(true)}>Mostra Area</Button>}
        </div>

</>
  );
}

export default AlertDismissible;
