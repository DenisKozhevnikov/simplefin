import { supabase } from "@Shared/api/supabase";
import { getMonthRange } from "@Shared/lib/date";
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const PAGE_SIZE = 20;

export function useInfiniteTransactions({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  return useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["transactions", year, month],
    queryFn: async ({ pageParam = 0 }) => {
      const from = pageParam * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .order("date", { ascending: false })
        .range(from, to);

      if (error) throw error;
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === PAGE_SIZE ? allPages.length : undefined;
    },
    staleTime: Infinity,
  });
}

export function useMonthlyTotal(year: number, month: number) {
  const { start, end } = getMonthRange(year, month);

  return useQuery({
    queryKey: ["transactions-total", year, month],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("transactions")
        .select("amount")
        .gte("date", start)
        .lte("date", end);

      if (error) throw error;
      return data?.reduce((sum, t) => sum + t.amount, 0) ?? 0;
    },
    placeholderData: 0,
  });
}

export function useAddTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (transaction: {
      title: string;
      amount: number;
      date: string;
    }) => {
      const { error } = await supabase
        .from("transactions")
        .insert([transaction]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
