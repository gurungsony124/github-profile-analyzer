import { useGithubUser } from "@/hooks/useGithubUser";
import { useParams } from "react-router-dom";
export default function UserDetails() {
  const {username} = useParams()
   const {data:user, isLoading, isError} = useGithubUser(username as string)
   if(isLoading){
    return "Loading...."
   }
   if(isError){
    return (
      <p>Something is Wrong</p>
    )
   }

  return (
    <div className="text-white mt-40">
      <p>{user?.login}</p>
      <div>adfkj</div>
    </div>
  )
}
