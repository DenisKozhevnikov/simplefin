import { Database } from "@Shared/api/supabase/types";

export type TransactionType =
  Database["public"]["Tables"]["transactions"]["Row"];
