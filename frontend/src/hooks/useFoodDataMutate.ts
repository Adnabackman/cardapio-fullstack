import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import type { FoodData } from "../interface/FoodData";

const postData = async (data: FoodData): Promise<AxiosResponse> => {
  return axios.post("http://localhost:8080/food", data);
};

export function useFoodDataMutate() {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse, Error, FoodData>({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });
}
