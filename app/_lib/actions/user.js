import { supabase } from "../supabase";

export default async function getLocalUserInfo(user) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) console.error("Error getting user profile:", error);
  return data;
}
