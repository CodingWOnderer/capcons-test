import { apiRequest } from "@/config/request";
import { useMutation } from "@tanstack/react-query";
import type { LoginDTO, LoginResponseDTO } from "./types";
import { isAxiosError } from "axios";

export const dashboardSession = {
    sessionConfig:()=>["session-config"] as const
}

export const dashboardSessionRefresh = async ()=>await apiRequest.get(`auth/refresh`)

export const login = async (loginDetails: LoginDTO) => {
  const formData = new FormData();

  Object.entries(loginDetails).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const { data } = await apiRequest.post<LoginResponseDTO>(
    "/auth/login",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (details: LoginDTO) => {
      return login(details);
    },
    onError:(data)=>{
      if(isAxiosError(data)){
        console.log(data.response)
      }
    }
  });
};
