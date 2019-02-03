import React, { useState } from "react";
import ReactDOM from "react-dom";
import Octaves from "./components/Octaves";
import Toolbar from "./components/Toolbar"
import GlobalStyle from "./components/globalStyle"

function App() {
  const [ octaves, setOctaves ] = useState(2);
  const [ showNotes, setShowNote ] = useState(true);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Octaves
        octaves={octaves}
        showNotes={showNotes}
      />
      <Toolbar
        octaves={octaves}
        showNotes={showNotes}
        handleShowNoteChange={setShowNote}
        handleOctaveChange={setOctaves}
      />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
