// Igualmente, este es un esquema básico. Añade más detalles como necesites.
"use client"
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import { useState } from "react"
export default function PostCard(/* {
  userFullName,
  userName,
  avatarUrl,
  content
}:{
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
} */) {

  const [isFollowed, setIsFollowed] = useState(false);

  return (

    <Card className="max-w-[340px]">

      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md"/>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
      </CardHeader>

      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          cardbody
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>

      <CardFooter className="gap-3">

      </CardFooter>

    </Card>
  );
}