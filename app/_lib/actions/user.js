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
