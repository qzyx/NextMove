import { supabase } from "../supabase";
import Cookies from "js-cookie";

export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function register(email, password, username) {
  try {
    // Step 1: Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username: username },
      },
    });

    if (authError) throw authError;

    if (!authData?.user) {
      throw new Error("Registration failed. No user returned.");
    }

    const { error: insertError } = await supabase.from("profiles").insert([
      {
        id: authData.user.id,
        username: authData.user.user_metadata.username,
        avatar_url: "",
        bio: "",
        elo: 500,
        recent_matches: [],
      },
    ]);

    if (insertError) {
      console.error("Profile creation failed:", insertError);

      throw new Error("Failed to create user profile. Please try again.");
    }

    return authData;
  } catch (error) {
    console.error("Registration process error:", error);
    throw error;
  }
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function getCurrentUser() {
  const { data: sessionData } = await supabase.auth.getSession();

  if (!sessionData.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;

  return data.user;
}

export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
}
