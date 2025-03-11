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
export async function updateUsersData(userId, eloChange, action, matchInfo) {
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

  const { wins, losses, draws, total_games, recent_matches, elo } = userData;

  const { data, error } = await supabase
    .from("profiles")
    .update({
      elo:
        action === "win"
          ? elo + eloChange + 10
          : action === "loss"
          ? elo + eloChange - 10
          : elo + eloChange,
      wins: action === "win" ? wins + 1 : wins,
      losses: action === "loss" ? losses + 1 : losses,
      draws: action === "draw" ? draws + 1 : draws,
      total_games: total_games + 1,
      recent_matches: [
        {
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
