import { useState } from 'react';

export default ({ octaves, showNotes, handleShowNoteChange, handleOctaveChange }) => {
  const [ showNotesState, setShowNotes ] = useState(showNotes);
  const [ octavesState, setOctaves ] = useState(octaves);

  function _handleShowNoteChange({ target }) {
    const showNotes = target.checked;
    setShowNotes(showNotes);
    handleShowNoteChange(showNotes);
  }

  function _handleOctaveChange({ target }) {
    const octaves = Number(target.value);
    setOctaves(octaves);
    handleOctaveChange(octaves);
  }

  return (
    <div>
      <input type="checkbox" value="1" checked={showNotesState} onChange={_handleShowNoteChange} />
      <input type="number" min="1" max="7" defaultValue={octavesState} onChange={_handleOctaveChange} />
    </div>
  );
}
