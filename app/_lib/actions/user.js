import { supabase } from "../supabase";

export async function getLocalUserInfo(user) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) console.error("Error getting user profile:", error);
  return data;
}
export async function changeUserStatus(userId, status) {
  const { error } = await supabase
    .from("profiles")
    .update({ status })
    .eq("id", userId);
  if (error) console.error("Error updating user status:", error);
}
export async function updateUsersData(
  userId,
  eloChange,
  action,
  matchInfo,
  gameId
) {
  const { data: game, error: gameError } = await supabase
    .from("games")
    .select("*")
    .eq("id", gameId)
    .single();
  if (gameError) console.error("Error fetching game data:", gameError);
  const { play_time } = game;

  // First, get the current user data
  const { data: userData, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (fetchError) {
    console.error("Error fetching user data:", fetchError);
    return;
  }

  const {
    wins,
    losses,
    draws,
    total_games,
    recent_matches,
    elo,
    total_playtime,
  } = userData;

  const { data, error } = await supabase
    .from("profiles")
    .update({
      elo:
        action === "win"
          ? elo + eloChange
          : action === "loss"
          ? elo + eloChange
          : elo + eloChange,
      wins: action === "win" ? wins + 1 : wins,
      losses: action === "loss" ? losses + 1 : losses,
      draws: action === "draw" ? draws + 1 : draws,
      total_games: total_games + 1,
      total_playtime: total_playtime + play_time,
      recent_matches: [
        {
          play_time: play_time,
          opponent_id: matchInfo.opponent_id,
          opponent: matchInfo.opponent,
          result: action,
          elo_change: eloChange,
          date: new Date().toLocaleString(),
        },
        ...recent_matches,
      ],
    })
    .eq("id", userId);
  if (error) console.error("Error updating user data:", error);
  return data;
}
export async function getUserById(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) console.error("Error getting user:", error);
  return data;
}
export function formatDate(dateInput) {
  if (!dateInput) return "N/A";

  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return "Invalid date";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export const formatPlaytime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};
