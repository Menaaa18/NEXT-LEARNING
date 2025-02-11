import { useRouter } from "next/router";
import React from "react";



function UserComp({ user }) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push({
          pathname: `/users/${user.login}` ,
        query: {
          imgUrl: user.avatar_url,
        },
      });
      }}
      className="shadow-md hover:shadow-none flex flex-col gap-3 rounded-x1 cursor-pointer"
    >
      <img src={user.avatar_url} className="size-40" alt="">
     </img>
     
      <p> {user.login}</p>
    </div>
  );
}
export default UserComp;
