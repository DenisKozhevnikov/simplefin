import { supabase } from "@Shared/api/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSpendingLimit() {
  return useQuery({
    queryKey: ["spendingLimit"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("settings")
        .select("monthly_limit")
        .eq("id", "spending-limit")
        .single();

      if (error) throw error;
      return data.monthly_limit;
    },
  });
}

export function useUpdateSpendingLimit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (limit: number) => {
      const { error } = await supabase
        .from("settings")
        .update({ monthly_limit: limit })
        .eq("id", "spending-limit");

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spendingLimit"] });
    },
  });
}
