import { supabase } from "../supabase";

export async function findMatch(userId) {
  const { data: opponents, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("status", "queuing")
    .neq("id", userId)
    .limit(1);

  if (error) console.error("Error finding match:", error);

  if (opponents.length > 0) {
    const opponent = opponents[0];
    console.log("Match found:", opponent);

    const isUserX = Math.random() < 0.5;
    const userX = isUserX ? userId : opponent.id;
    const userO = isUserX ? opponent.id : userId;

    const { data, error: gameError } = await supabase
      .from("games")
      .insert({
        user_x: userX,
        user_o: userO,
        started_at: new Date().toISOString(),
        board: Array(9).fill(""),
      })
      .select();
    if (gameError) console.error("Error creating game:", gameError);
    const game = data[0];
    return game;
  }
}

export async function getGame(gameId) {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .single();
  if (error) console.error("Error getting game:", error);
  return data;
}
