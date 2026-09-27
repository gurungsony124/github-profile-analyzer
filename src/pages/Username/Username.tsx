import { useGithubUser } from "@/hooks/useGithubUser"

interface UsernameProps{
  username:string
}

export default function Username({username}:UsernameProps) {
  const {data} = useGithubUser(username)
  console.log(data);
  return (
    <div>
      
    </div>
  )
}
