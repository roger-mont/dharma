'use client';

import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function Error() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-center items-center content-center">
      <Alert
        className="flex flex-col items-center p-2 w-40 "
        variant="destructive"
      >
        <AlertTitle className="p-2">Something went wrong!</AlertTitle>
        <AlertDescription className="p-2">
          <Button
            variant="destructive"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => router.push('/')
            }
          >
            Try again
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
