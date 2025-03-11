import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials:", {
    url: supabaseUrl ? "Set" : "Missing",
    key: supabaseKey ? "Set" : "Missing",
  });
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: typeof window !== "undefined" ? localStorage : undefined,
  },
});

// Initialize realtime on client side only
if (typeof window !== "undefined") {
  (async () => {
    try {
      // Test the connection
      const { error } = await supabase.from("profiles").select("id").limit(1);
      if (error) throw error;
      console.log("Supabase connection established successfully");
    } catch (err) {
      console.error("Supabase connection error:", err);
    }
  })();
}
