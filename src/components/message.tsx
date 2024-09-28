"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/shadcn/card";
import { Label } from "~/components/shadcn/label";

export function Message({
  emergency,
  location,
  status,
  description,
  evacuationCenter,
}: {
  emergency?: string;
  location?: string;
  status?: string;
  description?: string;
  evacuationCenter?: string;
}) {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle className="text-xl">{emergency}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 pt-2 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Location</Label>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subcategory">{location}</Label>
          </div>
        </div>
        <div className="grid gap-6 pt-2 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Status</Label>
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="subcategory"
              className={
                status === "Ongoing" ? "text-destructive" : "text-green-600"
              }
            >
              {status}
            </Label>
          </div>
        </div>
        <div className="grid gap-6 pt-2 sm:grid-cols-3">
          <div className="grid gap-3">
            <Label htmlFor="category">Evacuation Center</Label>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subcategory">{evacuationCenter}</Label>
          </div>
        </div>
      </CardContent>
      <CardContent>
        <div className="text-justify">{description}</div>
      </CardContent>
    </Card>
  );
}
