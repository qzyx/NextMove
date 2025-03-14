import TicTacToe from "@/app/_Components/Game/TicTacToe";
import { getUserProfile } from "@/app/_lib/actions/auth";
import { getGame } from "@/app/_lib/actions/game";

async function page({ params }) {
  const { id } = await params;
  const game = await getGame(id);

  // Add player data to the game object
  const enhancedGame = {
    ...game,
    player1: {
      username: "Player1",
      elo: 1245,
    },
    player2: {
      username: "Player2",
      elo: 1198,
    },
    currentPlayer: game.currentPlayer || "X",
  };
  const userX = await getUserProfile(game.user_x);
  const userO = await getUserProfile(game.user_o);

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className=" rounded-xl p-4">
        <TicTacToe game={game} userO={userO} userX={userX} />
      </div>
    </main>
  );
}

export default page;
