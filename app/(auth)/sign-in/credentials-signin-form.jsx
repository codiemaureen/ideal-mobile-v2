'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CredentialsSignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault(); 
    setError('');
    setSubmitting(true);

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false, 
    });

    setSubmitting(false);

    if (res?.error) {
      setError('Invalid email or password');
      return;
    }

    window.location.assign('/'); 
  }

  return (
    <form method="post" onSubmit={onSubmit}>
      <div className="space-y-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-4 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <p className="text-sm text-red-600 mt-3">{error}</p>}

      <div className="mt-6">
        <Button className="w-full" type="submit" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </Button>
      </div>

      <div className="text-sm text-center text-muted-foreground mt-4">
        Don&apos;t have an account?{' '}
        <a href="/sign-up" className="link">Sign Up</a>
      </div>
    </form>
  );
}
