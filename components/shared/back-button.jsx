'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackButton({
  fallback = '/',
  className = '',
  children,
}) {
  const router = useRouter();

  const onClick = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <Button
      type="button"
      onClick={onClick}
      variant="destructive"
      className={className}
      aria-label="Go back"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {children ?? 'Back'}
    </Button>
  );
}
