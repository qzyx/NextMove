"use client";

import InputBox from "./InputBox";

export default function TicTacToe() {
  // Only static presentation without functionality
  return (
    <div className="flex flex-col items-center gap-  p-8 rounded-xl  ">
      <div className="text-xl font-medium mb-4">Your turn: X</div>

      <div className="grid grid-cols-3 gap-2 grid-rows-3">
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
        <InputBox></InputBox>
      </div>

      {/* Game controls */}
      <div className="flex gap-4 mt-6">
        <button className="px-7 py-3  cursor-pointer text-white rounded-lg font-medium tracking-wide ">
          Reset Game
        </button>
        <button className="px-7 py-3 cursor-pointer text-white rounded-lg font-medium tracking-wide ">
          Quit Game
        </button>
      </div>
    </div>
  );
}
