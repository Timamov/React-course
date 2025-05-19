
export default function Button({ setNumber }) {
  return (
    <button
      onClick={() => {
        setNumber((prevNumber) => prevNumber + 1);
      }}
    >
      +
    </button>
  );
}
