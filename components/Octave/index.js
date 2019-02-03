import Key from "../Key";
import Tone from "tone";

const synth = new Tone.Synth().toMaster();

const keyMapping = [
  { type: "white", notes: ["C"] },
  { type: "black", notes: ["C#", "D♭"] },
  { type: "white", notes: ["D"] },
  { type: "black", notes: ["D#", "E♭"] },
  { type: "white", notes: ["E"] },
  { type: "white", notes: ["F"] },
  { type: "black", notes: ["F#", "G♭"] },
  { type: "white", notes: ["G"] },
  { type: "black", notes: ["G#", "A♭"] },
  { type: "white", notes: ["A"] },
  { type: "black", notes: ["A#", "B♭"] },
  { type: "white", notes: ["B"] }
];

export default ({ octave, showNotes }) => {
  const keys = keyMapping.map(({ notes, type }) => {
    const note = `${notes[0]}${octave}`;

    return (
      <Key key={`octave-${octave}-note-${notes}`} type={type} showNotes={showNotes} notes={notes} onClick={() => synth.triggerAttackRelease(note, "8n")} />
    );
  });
  return keys;
};
