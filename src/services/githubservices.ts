import { clientDetails } from "@/config/axiosSetup"

export const githubServices = {
   getUser:async(username: string) => {
    const response = await clientDetails.get(`/users/${username}`)
    console.log(response.data);
    return response.data;
 
   }
}
