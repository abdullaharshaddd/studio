
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { styleMatchJackets } from '@/ai/flows/style-match-jackets';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, UploadCloud } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

export default function StyleMatch() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image file first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      try {
        const photoDataUri = reader.result as string;
        const res = await styleMatchJackets({ photoDataUri });
        setResult(res.styleMatchResult);
      } catch (err) {
        console.error(err);
        setError("Failed to analyze style. The AI may be busy, please try another image or check back later.");
      } finally {
        setLoading(false);
      }
    };
    reader.onerror = () => {
      setError("Failed to read the image file. Please try again.");
      setLoading(false);
    };
  };

  return (
    <section id="style-match" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            AI-Powered Tool
          </div>
          <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Find Your Perfect Style Match
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Upload a photo of a jacket you like, and our AI will find similar styles from our collection.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <Label htmlFor="picture" className="text-base font-medium">Upload Jacket Image</Label>
                  <div className="mt-2">
                    <label
                      htmlFor="picture"
                      className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-secondary/50 p-6 transition hover:bg-secondary"
                    >
                      <UploadCloud className="h-12 w-12 text-muted-foreground" />
                      <span className="mt-4 text-sm font-semibold text-foreground">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </span>
                      <span className="mt-1 text-xs text-muted-foreground">PNG, JPG, or WEBP</span>
                      <Input
                        id="picture"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg, image/webp"
                        disabled={loading}
                      />
                    </label>
                  </div>
                </div>
                {preview && (
                  <div className="relative h-48 w-full overflow-hidden rounded-md border">
                    <Image src={preview} alt="Image preview" fill className="object-contain" />
                  </div>
                )}
                <Button type="submit" disabled={!file || loading} className="w-full">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing Style...
                    </>
                  ) : (
                    'Find Match'
                  )}
                </Button>
              </form>

              <div className="flex flex-col justify-center">
                {loading && (
                  <div className="space-y-4">
                     <Skeleton className="h-6 w-3/4" />
                     <Skeleton className="h-4 w-full" />
                     <Skeleton className="h-4 w-full" />
                     <Skeleton className="h-4 w-5/6" />
                  </div>
                )}
                {!loading && error && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                {!loading && result && (
                  <Card className="bg-secondary">
                    <CardHeader>
                      <CardTitle className="font-headline flex items-center gap-2"><Lightbulb className="text-accent" /> AI Style Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/90">{result}</p>
                    </CardContent>
                  </Card>
                )}
                 {!loading && !result && !error && (
                    <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-secondary/50 p-8 text-center">
                        <p className="text-muted-foreground">Your style match result will appear here.</p>
                    </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
