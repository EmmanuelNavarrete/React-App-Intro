import React from "react";

export default function Form(props) {
  const [boletos, setBoletos] = React.useState(0);
  const { movie } = props;

  return (
    <form>
      <h3>{movie.name}</h3>
      <button
        type="button"
        onClick={() => setBoletos(boletos - 1)}
        disabled={boletos <= 0}
      >
        {" "}
        -{" "}
      </button>
      {boletos}
      <button
        type="button"
        onClick={() => setBoletos(boletos + 1)}
        disabled={boletos >= movie.available}
      >
        {" "}
        +{" "}
      </button>
    </form>
  );
}
