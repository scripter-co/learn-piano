import { useState } from 'react';
import { Key, Note } from "./styles"

export default ({ notes, type, showNotes, onClick }) => {
  const [ mouseDown, setMouseState ] = useState(false);

  return (
    <Key
      type={type}
      mouseDown={mouseDown}
      onMouseDown={setMouseState.bind(this, true)}
      onMouseUp={setMouseState.bind(this, false)}
      onMouseOut={setMouseState.bind(this, false)}
      onClick={onClick}
    >
      {showNotes && notes.map((note) => <Note key={`note-${note}`}>{note}</Note>)}
    </Key>
  );
};
