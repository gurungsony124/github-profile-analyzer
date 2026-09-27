import { githubServices } from "@/services/githubservices"
import { useQuery } from "@tanstack/react-query"

export const useGithubUser = (username:string) => {
  return useQuery({
    queryKey:['username'],
    queryFn:() => githubServices.getUser(username),
    retry:false,
    enabled:!!username
  })
}