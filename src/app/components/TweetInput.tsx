// Este es un esquema básico, deberás expandirlo según necesites.
"use client"
import React from "react";
import { Button } from "@nextui-org/react";



const TweetInput = () => {
    return (
      <div>
        <div>
          <textarea
          className="w-full p-2 border rounded-lg"
          placeholder="¿Qué está pasando?"> 
          </textarea>
        </div>
  
        <div>
        <Button color="primary" size="md" radius="md" variant="shadow">
          tweet
        </Button>
        </div>
      </div>
    );
  };
  
  
  export default TweetInput;
  