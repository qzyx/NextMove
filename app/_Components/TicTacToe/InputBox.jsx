export default function InputBox({ handleMove, value, disabled }) {
  return (
    <button
      onClick={handleMove}
      disabled={disabled || value !== ""}
      className={`w-24 h-24 md:w-28 md:h-28 bg-gray-800/60 hover:bg-gray-700/60 border border-gray-700/50 rounded-lg text-4xl md:text-5xl font-bold flex items-center justify-center transition-colors
        ${
          value === "X"
            ? "text-blue-400"
            : value === "O"
            ? "text-purple-400"
            : "text-transparent"
        }
        ${disabled ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
    >
      {value}
    </button>
  );
}
