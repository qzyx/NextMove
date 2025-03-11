import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials:", {
    url: supabaseUrl ? "Set" : "Missing",
    key: supabaseKey ? "Set" : "Missing",
  });
}

export const supabase = createClient(supabaseUrl, supabaseKey);
