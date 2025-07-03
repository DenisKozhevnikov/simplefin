import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { Database } from "./types";

const supabaseUrl = "https://bjglnuuzmfpaoettqarg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZ2xudXV6bWZwYW9ldHRxYXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMDY0NDUsImV4cCI6MjA2NjY4MjQ0NX0.FIT52VwYt3LBOeXiO83tkZJDeh0cwbir7Qubq_8yJQM";

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {}
);
