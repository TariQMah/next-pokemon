import ListCategories from "@/components/ListCategories";
import { getCategories } from "@/server/api/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListCategories />
      </HydrationBoundary>
    </>
  );
}
