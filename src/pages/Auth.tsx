import MainWrapper from "@/components/main-wrapper";
import { Button } from "@/components/ui/button";

import appwrite from "@/lib/appwrite";
import { Brush, Clapperboard } from "lucide-react";

const Auth = () => {
  return (
    <MainWrapper className="flex-col items-center justify-center gap-6">
      <h1 className="max-w-[900px] text-5xl whitespace-break-spaces text-center font-mono font-bold tracking-wide">
        Seamless Collaboration Platform for the Creators
      </h1>

      <span className="text-muted-foreground font-medium mt-6">
        Sign In With Google for a
      </span>
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={() => appwrite.signInWithGoogle("creator")}
          variant={"default"}
          size={"lg"}
        >
          <Brush className="w-4 h-4 mr-4" /> <span>Creator's Account</span>
        </Button>
        <span className="text-muted-foreground font-medium">OR</span>
        <Button
          onClick={() => appwrite.signInWithGoogle("editor")}
          variant={"outline"}
          size={"lg"}
        >
          <Clapperboard className="w-4 h-4 mr-4" />{" "}
          <span>Editor's Account</span>
        </Button>
      </div>
    </MainWrapper>
  );
};

export default Auth;
