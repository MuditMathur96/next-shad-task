import { Separator } from "@/components/ui/separator";
import {Button} from '@/components/ui/button';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-start w-full p-8">
        <h1 className="text-2xl">Welcome,</h1>
        <p className="text-xl">This is an assignment submission.</p>
        
        <p className="my-6">Click on the links below to get started.</p>
        <Separator className="mb-2" />
        <div className="space-x-6">
        <Link
        href="/prompts"
        >
          <Button>Prompts</Button>
        
        </Link>
       
        <Link
        href="/bcf-boards"
        >
          <Button>BCF Boards</Button>
        
        </Link>
        </div>
    </main>
  );
}
