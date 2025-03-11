"use client";

import { useEffect, useState, useCallback } from "react";
import InputBox from "./InputBox";
import { supabase } from "@/app/_lib/supabase";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import { useRouter } from "next/navigation";

export default function TicTacToe({ game, userX, userO }) {
  const router = useRouter();
  const { user } = useAuth();
  const [board, setBoard] = useState(game.board);
  const [currentPlayer, setCurrentPlayer] = useState(game.current_player);
  const [winner, setWinner] = useState(game.winner);
  const [isGameOver, setIsGameOver] = useState(
    !!game.winner || isBoardFull(game.board)
  );
  const [gameState, setGameState] = useState(game);

  // Define symbols for players
  const symbols = {
    user_x: "X",
    user_o: "O",
  };

  // Check if it's the current user's turn
  const isMyTurn =
    (user?.id === game.user_x && currentPlayer === "user_x") ||
    (user?.id === game.user_o && currentPlayer === "user_o");

  // Function to update game state in database
  const updateGameInDatabase = useCallback(
    async (newBoard, newCurrentPlayer, newWinner, isOver) => {
      try {
        const { error } = await supabase
          .from("games")
          .update({
            board: newBoard,
            current_player: newCurrentPlayer,
            winner: newWinner,
            status: isOver ? "finished" : "in_process",
          })
          .eq("id", game.id);

        if (error) {
          console.error("Error updating game:", error);
        }
      } catch (err) {
        console.error("Failed to update game:", err);
      }
    },
    [game.id]
  );

  // Handle board updates
  const handleMove = useCallback(
    (index) => {
      // Return early if conditions aren't met
      if (!isMyTurn || isGameOver || board[index] !== "") {
        return;
      }

      // Make move
      const newBoard = [...board];
      const symbol = currentPlayer === "user_x" ? "X" : "O";
      newBoard[index] = symbol;

      // Check for a winner
      const gameWinner = checkWinner(newBoard);
      const boardFull = isBoardFull(newBoard);
      const gameIsOver = !!gameWinner || boardFull;
      const nextPlayer = currentPlayer === "user_x" ? "user_o" : "user_x";

      // Update local state
      setBoard(newBoard);
      setIsGameOver(gameIsOver);

      if (gameWinner) {
        setWinner(gameWinner === "X" ? "user_x" : "user_o");
      } else if (!gameIsOver) {
        setCurrentPlayer(nextPlayer);
      }

      // Update database
      updateGameInDatabase(
        newBoard,
        gameWinner ? currentPlayer : nextPlayer,
        gameWinner ? (gameWinner === "X" ? userX.id : userO.id) : null,
        gameIsOver
      );
    },
    [board, currentPlayer, isGameOver, isMyTurn, updateGameInDatabase]
  );

  // Listen for remote updates to the game
  useEffect(() => {
    // Setup subscription to listen for changes
    const channel = supabase
      .channel(`game-${game.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "games",
          filter: `id=eq.${game.id}`,
        },
        (payload) => {
          console.log("Game updated remotely:", payload);
          if (payload.new) {
            // Update all game state from the received data
            setBoard(payload.new.board);
            setCurrentPlayer(payload.new.current_player);
            setWinner(payload.new.winner);
            setIsGameOver(
              !!payload.new.winner || isBoardFull(payload.new.board)
            );
            setGameState(payload.new);
          }
        }
      )
      .subscribe();

    // Cleanup subscription on component unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [game.id]);

  // Check for winner
  function checkWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return "X" or "O"
      }
    }
    return null;
  }

  // Check if board is full (draw)
  function isBoardFull(board) {
    return board.every((cell) => cell !== "");
  }

  // Get username for display
  function getPlayerName(playerType) {
    return playerType === "user_x" ? userX?.username : userO?.username;
  }
  function getWinnerName(playerType) {
    return playerType === userX.id ? userX?.username : userO?.username;
  }

  // Forfeit game
  const handleForfeit = async () => {
    if (!isGameOver) {
      const winner = user.id === game.user_x ? userO.id : userX.id;
      await supabase
        .from("games")
        .update({
          winner: winner,
          status: "finished",
        })
        .eq("id", game.id);
    }
    if (isGameOver) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 rounded-xl">
      {/* Game Info */}
      <div className="w-full max-w-md mb-8 bg-gray-900/60 p-4 rounded-lg border border-gray-700/50">
        {/* Players info with current turn indicator */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-full ${
                currentPlayer === "user_x" ? "bg-blue-600" : "bg-gray-700"
              } flex items-center justify-center text-white text-xs font-bold`}
            >
              X
            </div>
            <span className="text-sm font-medium text-white">
              {userX?.username || "Player X"}
            </span>
            <span className="text-xs text-gray-400">({userX?.elo || "?"})</span>
          </div>

          <div className="text-gray-400 text-xs">VS</div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">({userO?.elo || "?"})</span>
            <span className="text-sm font-medium text-white">
              {userO?.username || "Player O"}
            </span>
            <div
              className={`w-6 h-6 rounded-full ${
                currentPlayer === "user_o" ? "bg-purple-600" : "bg-gray-700"
              } flex items-center justify-center text-white text-xs font-bold`}
            >
              O
            </div>
          </div>
        </div>

        {/* Status message */}
        <div className="text-center py-2 bg-gray-800/80 rounded border border-gray-700/50">
          <span className="text-sm font-medium text-blue-300">
            {winner
              ? `${getWinnerName(winner)} wins!`
              : isGameOver
              ? "It's a draw!"
              : `${getPlayerName(currentPlayer)}'s turn`}
          </span>
          {!isGameOver && !isMyTurn && (
            <span className="block text-xs text-gray-400 mt-1">
              Waiting for opponent...
            </span>
          )}
        </div>
      </div>

      {/* Game board */}
      <div className="grid grid-cols-3 gap-2 grid-rows-3">
        {board.map((cell, index) => (
          <InputBox
            key={index}
            value={cell}
            handleMove={() => handleMove(index)}
            disabled={!isMyTurn || isGameOver}
          />
        ))}
      </div>

      {/* Game controls */}
      <div className="flex gap-4 mt-6">
        <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg font-medium tracking-wide transition-colors">
          Chat
        </button>
        <button
          onClick={handleForfeit}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-lg font-medium tracking-wide transition-colors"
        >
          {isGameOver ? "Leave" : "Forfeit"}
        </button>
      </div>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="mt-8 text-xs text-gray-500">
          <p>Game ID: {game.id}</p>
          <p>Current Player: {currentPlayer}</p>
          <p>Is My Turn: {isMyTurn ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
