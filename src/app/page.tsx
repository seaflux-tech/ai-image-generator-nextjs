'use client';
import OpenAI from "openai";
import { useState } from "react";

import InputBox from "@/components/Input";
import SubmitBtn from "@/components/submitBtn";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string | undefined>('');

  const handleImageGenerator = async () => {
    setIsLoading(true);
    try{
      const completion = new OpenAI({
        apiKey: 'Place your open-AI Dall-E 3 API key here',
        dangerouslyAllowBrowser: true
      });
      const res = await completion.images.generate({
        model: 'dall-e-3',
        prompt: text,
        quality: 'standard',
        n: 1,
      });
      const img_url = res.data[0].url;
      setIsLoading(false);
      setImgUrl(img_url);
    }catch(err){
      setIsLoading(false);
      console.error(err);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <h1 className="text-4xl font-bold">AI Image Generator</h1>
      
      {
        imgUrl && (
          <Image 
            src={imgUrl} alt={""}          
            width={256}
            height={256}  
            className="rounded-lg border-2 border-gray-300"
          />
        )
      }
      <div className="w-full flex flex-row justify-center items-end gap-x-4 sticky bottom-0">
        <InputBox 
          text={text}
          setText={setText}
        />
        <SubmitBtn 
          isLoading={isLoading}
          submitHandler={handleImageGenerator}
        />
      </div>
    </main>
  );
}
