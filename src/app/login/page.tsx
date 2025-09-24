'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'

export default function LoginPage() {
  const { signIn, signUp, signInWithGoogle, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onSignIn = async () => {
    setError(null)
    const { error } = await signIn(email, password)
    if (error) setError(error.message || 'Failed to sign in')
  }

  const onSignUp = async () => {
    setError(null)
    const { error } = await signUp(email, password)
    if (error) setError(error.message || 'Failed to sign up')
  }

  const onGoogle = async () => {
    setError(null)
    const { error } = await signInWithGoogle()
    if (error) setError(error.message || 'Failed to start Google sign in')
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Sign in</h1>

        {error && (
          <div className="mb-4 rounded bg-red-50 text-red-700 px-3 py-2 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm text-gray-700">Password</label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" />
          </div>
          <div className="flex gap-2">
            <Button onClick={onSignIn} disabled={loading} className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">Sign in</Button>
            <Button onClick={onSignUp} disabled={loading} variant="outline" className="flex-1">Create account</Button>
          </div>
          <div className="relative text-center text-sm text-gray-500 my-2">
            <span>or</span>
          </div>
          <Button onClick={onGoogle} disabled={loading} variant="outline">Continue with Google</Button>
        </div>
      </div>
    </div>
  )
}


