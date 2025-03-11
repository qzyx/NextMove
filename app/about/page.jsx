import Link from "next/link";
import {
  Shield,
  Trophy,
  Brain,
  Users,
  Clock,
  LineChart,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 mt-10 py-12 max-w-5xl text-gray-200">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About NextMove
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A modern platform for strategic Tic Tac Toe gameplay with competitive
          matchmaking and ranking.
        </p>
      </section>

      {/* Game explanation */}
      <section className="mb-16 bg-gray-900/60 p-8 rounded-xl border border-gray-700 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Brain className="text-blue-400" />
              <span>How to Play</span>
            </h2>
            <p className="mb-4 text-gray-300">
              Tic Tac Toe is a classic game of strategy played on a 3×3 grid.
              Players take turns marking spaces with either X or O. The first
              player to align three of their marks horizontally, vertically, or
              diagonally wins the match.
            </p>
            <p className="mb-4 text-gray-300">
              While the rules are simple, mastering the perfect strategy
              requires practice and quick thinking, especially with our timed
              matches that add pressure to each move.
            </p>
          </div>

          {/* Game board representation */}
          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-3 gap-2 w-64 h-64">
              {["X", "", "O", "O", "X", "", "", "", "X"].map((cell, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-gray-700 rounded flex items-center justify-center"
                >
                  <span
                    className={`text-4xl font-bold ${
                      cell === "X" ? "text-blue-500" : "text-purple-500"
                    }`}
                  >
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-100">
          Winning Patterns
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-blue-300">Horizontal Wins</h4>
            <p className="text-sm text-gray-400">
              Align three of your marks in any horizontal row to win.
            </p>
            <div className="grid grid-cols-3 gap-1 mt-3 w-full h-20">
              {["X", "X", "X", "O", "O", "", "", "", ""].map((cell, i) => (
                <div
                  key={i}
                  className={`bg-gray-900 flex items-center justify-center rounded ${
                    i < 3 ? "border border-blue-500/50" : ""
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      cell === "X" ? "text-blue-500" : "text-purple-500"
                    }`}
                  >
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-blue-300">Vertical Wins</h4>
            <p className="text-sm text-gray-400">
              Align three of your marks in any vertical column to win.
            </p>
            <div className="grid grid-cols-3 gap-1 mt-3 w-full h-20">
              {["O", "X", "", "O", "X", "", "O", "X", ""].map((cell, i) => (
                <div
                  key={i}
                  className={`bg-gray-900 flex items-center justify-center rounded ${
                    i % 3 === 1 ? "border border-blue-500/50" : ""
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      cell === "X" ? "text-blue-500" : "text-purple-500"
                    }`}
                  >
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-blue-300">Diagonal Wins</h4>
            <p className="text-sm text-gray-400">
              Align three of your marks diagonally to win.
            </p>
            <div className="grid grid-cols-3 gap-1 mt-3 w-full h-20">
              {["X", "O", "", "O", "X", "", "", "O", "X"].map((cell, i) => (
                <div
                  key={i}
                  className={`bg-gray-900 flex items-center justify-center rounded ${
                    i === 0 || i === 4 || i === 8
                      ? "border border-blue-500/50"
                      : ""
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      cell === "X" ? "text-blue-500" : "text-purple-500"
                    }`}
                  >
                    {cell}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ELO Rating Explanation */}
      <section className="mb-16 bg-gray-900/60 p-8 rounded-xl border border-gray-700 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <LineChart className="text-blue-400" />
          <span>Understanding ELO Rating</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-gray-300">
              The ELO rating system is a method for calculating the relative
              skill levels of players. Originally developed for chess by Arpad
              Elo, it's now widely used in competitive gaming.
            </p>
            <p className="mb-4 text-gray-300">
              In NextMove, every player starts with a base rating of 500. After
              each game, points are exchanged between players based on the game
              outcome and the difference between their ratings.
            </p>

            <h3 className="text-xl font-bold mb-3 text-gray-100">
              How Points Change
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h4 className="font-medium mb-2 text-green-400">
                  When You Win
                </h4>
                <p className="text-sm text-gray-300">
                  Defeating a higher-rated opponent earns you more points.
                  Winning against a lower-rated player gives you fewer points.
                </p>
                <div className="flex items-center gap-2 mt-3 text-green-400">
                  <span className="text-lg font-bold">+8 to +32 points</span>
                </div>
              </div>

              <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700">
                <h4 className="font-medium mb-2 text-red-400">When You Lose</h4>
                <p className="text-sm text-gray-300">
                  Losing to a lower-rated player costs you more points. Losing
                  to a higher-rated player costs you fewer points.
                </p>
                <div className="flex items-center gap-2 mt-3 text-red-400">
                  <span className="text-lg font-bold">-8 to -32 points</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/60 p-4 rounded-lg border border-gray-700 mb-6">
              <h4 className="font-medium mb-2 text-blue-300">
                Skill Representation
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Your ELO rating represents your skill level and is used for
                matchmaking to ensure fair and competitive games.
              </p>
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div
                    className="bg-red-500 h-full"
                    style={{ width: "25%" }}
                  ></div>
                  <div
                    className="bg-yellow-500 h-full"
                    style={{ width: "25%" }}
                  ></div>
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: "25%" }}
                  ></div>
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1 text-gray-400">
                <span>
                  Beginner
                  <br />
                  500-700
                </span>
                <span>
                  Intermediate
                  <br />
                  700-900
                </span>
                <span>
                  Advanced
                  <br />
                  900-1100
                </span>
                <span>
                  Expert
                  <br />
                  1100+
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-inner">
              <h3 className="text-xl font-bold mb-4 text-center text-gray-100">
                ELO Rating Example
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center bg-gray-800/60 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">
                      X
                    </div>
                    <div>
                      <div className="font-medium">Player A</div>
                      <div className="text-sm text-gray-400">700 ELO</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">WIN</div>
                </div>

                <div className="flex justify-between items-center bg-gray-800/60 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center text-white font-bold">
                      O
                    </div>
                    <div>
                      <div className="font-medium">Player B</div>
                      <div className="text-sm text-gray-400">800 ELO</div>
                    </div>
                  </div>
                  <div className="text-red-400 font-bold">LOSS</div>
                </div>

                <div className="border-t border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-300">Player A new rating:</div>
                    <div className="text-green-400 font-bold">
                      700 → 724 (+24)
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-300">Player B new rating:</div>
                    <div className="text-red-400 font-bold">
                      800 → 776 (-24)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Sparkles className="text-blue-400" />
          <span>Platform Features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-3 bg-blue-900/50">
                <Trophy className="text-blue-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Competitive Matchmaking
                </h3>
                <p className="text-gray-300">
                  Our matchmaking system pairs you with opponents of similar
                  skill levels. As you improve and win matches, you'll face
                  increasingly challenging opponents.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-3 bg-blue-900/50">
                <Shield className="text-blue-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rank System</h3>
                <p className="text-gray-300">
                  Climb the ranks from Bronze to Grandmaster as you win matches.
                  Each rank represents your skill level and comes with unique
                  profile badges.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-3 bg-blue-900/50">
                <Users className="text-blue-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">User Profiles</h3>
                <p className="text-gray-300">
                  Track your progress with detailed statistics including win
                  rate, match history, and ELO rating changes. Showcase your
                  achievements on your user profile.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-full p-3 bg-blue-900/50">
                <Clock className="text-blue-400 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Timed Matches</h3>
                <p className="text-gray-300">
                  Matches have time limits to keep the game moving at a fast
                  pace. Quick thinking and strategy are essential for victory in
                  our timed environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated call to action - removed login/signup */}
      <section className="text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-xl border border-blue-800/50 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to put your skills to the test?
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          NextMove offers a competitive environment for players of all skill
          levels. Start your journey to the top of the leaderboards today!
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
