import Octave from "../Octave";

export default function ({ octaves, showNotes }) {
  return (
    new Array(octaves)
      .fill("")
      .map((_, index) => {
        const octave = index + 1;

        return (
          <Octave key={`octave-${octave}`} showNotes={showNotes} octave={octave} />
        );
      })
  );
}
