import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/utils/axios-utils";
import { apiCacheTime } from "@/utils/contranst";

const onSuccess = (data: any) => {
  console.log("SUCESS", data);
};

const onError = (data: any) => {
  console.log("OnERROR", data);
};

const getAlaramData = async () => {
  const response = await request({
    url: `item-category/`,
  });
  return response;
};
export const useGetCategories = () => {
  return useQuery(["pokemon-categories"], getAlaramData, {
    onSuccess,
    onError,
    refetchOnWindowFocus: true,
    staleTime: apiCacheTime,
    retry: 3,

    select: ({ data }) => {
      console.log("data: ", data);
      //   const formattedData =
      //     data?.data?.alarms?.map((item) => {
      //       const alarmType =
      //         item?.included?.filter((temp) => temp.type === "alarms_types") ||
      //         [];
      //       const alarmTickets =
      //         item?.included?.filter((temp) => temp.type === "alarms_tickets") ||
      //         [];
      //       const customerInfo =
      //         item?.included?.filter((temp) => temp.type === "customers") || [];
      //       const {
      //         attributes: { id, hub_id, alarm_count, created_at },
      //       } = item;

      //       return {
      //         id,
      //         hub_id,
      //         alarmType: (alarmType && alarmType[0]?.attributes?.name) || "----",
      //         title:
      //           (customerInfo && customerInfo[0]?.attributes?.name) || "----",
      //         message:
      //           (alarmType && alarmType[0]?.attributes?.description) || "----",
      //         alarmCount: alarm_count,
      //         severity:
      //           (alarmTickets && alarmTickets[0]?.attributes?.severity) || "----",
      //         date: `${dayjs(created_at).format("DD MMM, YYYY HH:mm")}`,
      //       };
      //     }) || [];

      return {
        data: data,
        meta: data?.meta,
      };
    },
  });
};
