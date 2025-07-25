"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-red-500 text-2xl font-bold uppercase">
            Access Restricted
          </CardTitle>
          <CardDescription className="text-zinc-400 text-sm italic">
            You have attempted to access a protected resource.
          </CardDescription>
          <CardAction>
            <AlertTriangle className="text-red-500" />
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="">
            This is a{" "}
            <strong className="text-red-500">
              sensitive and private API endpoint.
            </strong>
            <br />
            Your access attempt has been detected and logged.
          </p>
          <p className=" text-sm">
            <span className="font-bold text-red-500">Incident reported:</span>{" "}
            All unauthorized access attempts are immediately flagged for
            security review.
          </p>
          <p className="text-xs text-zinc-500 mt-2">
            Repeated attempts may lead to your IP address being blocked.
          </p>
        </CardContent>
        <CardFooter className="pt-4">
          <Button
            type="button"
            className="w-full bg-red-500 text-white bold hover:bg-red-400"
            onClick={() =>
              (window.location.href =
                "https://github.com/m4sensen/masensen-api")
            }
          >
            Return to Safety&nbsp;&nbsp;&nbsp;
            <ArrowLeft />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
