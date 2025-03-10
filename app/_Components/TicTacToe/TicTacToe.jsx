"use client";

import InputBox from "./InputBox";
import { Shield, Clock, Users } from "lucide-react";

export default function TicTacToe({ game, userX, userO }) {
  console.log("game", game);

  return (
    <div className="flex flex-col items-center p-8 rounded-xl">
      {/* Game Info - Simple, centered design */}
      <div className="w-full max-w-md mb-8 bg-gray-900/60 p-4 rounded-lg border border-gray-700/50">
        {/* Players info with current turn indicator */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-full ${
                game.currentPlayer === "X" ? "bg-blue-600" : "bg-gray-700"
              } flex items-center justify-center text-white text-xs font-bold`}
            >
              X
            </div>
            <span className="text-sm font-medium text-white">
              {userX.username}
            </span>
            <span className="text-xs text-gray-400">({userX.elo})</span>
          </div>

          <div className="text-gray-400 text-xs">VS</div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">({userO.elo})</span>
            <span className="text-sm font-medium text-white">
              {userO.username}
            </span>
            <div
              className={`w-6 h-6 rounded-full ${
                game.currentPlayer === "O" ? "bg-purple-600" : "bg-gray-700"
              } flex items-center justify-center text-white text-xs font-bold`}
            >
              O
            </div>
          </div>
        </div>

        {/* Status message */}
        <div className="text-center py-2 bg-gray-800/80 rounded border border-gray-700/50">
          <span className="text-sm font-medium text-blue-300">
            {game.winner
              ? `${game.winner === "X" ? userX.username : userO.username} wins!`
              : `${
                  game.currentPlayer === "X" ? userX.username : userO.username
                }'s turn`}
          </span>
        </div>
      </div>

      {/* Game board - keeping it unchanged as requested */}
      <div className="grid grid-cols-3 gap-2 grid-rows-3">
        {game.board.map((cell, index) => (
          <InputBox key={index} value={cell} />
        ))}
      </div>

      {/* Game controls - simplified and centered */}
      <div className="flex gap-4 mt-6">
        <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg font-medium tracking-wide transition-colors">
          Chat
        </button>
        <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-lg font-medium tracking-wide transition-colors">
          Quit
        </button>
      </div>
    </div>
  );
}
