'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/auth-context'
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const { signIn, signUp, signInWithGoogle, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 6
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError(null)
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (value && !validatePassword(value)) {
      setPasswordError('Password must be at least 6 characters')
    } else {
      setPasswordError(null)
    }
  }

  const onSignIn = async () => {
    setError(null)
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters')
      return
    }

    const { error } = await signIn(email, password)
    if (error) setError(error.message || 'Failed to sign in')
  }

  const onSignUp = async () => {
    setError(null)
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters')
      return
    }

    const { error } = await signUp(email, password)
    if (error) setError(error.message || 'Failed to create account')
  }

  const onGoogle = async () => {
    setError(null)
    const { error } = await signInWithGoogle()
    if (error) setError(error.message || 'Failed to start Google sign in')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Image/Visual */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center text-white">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl font-bold text-white">J</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold mt-8 mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-xl text-gray-300 max-w-md">
            Sign in to your account and discover our exquisite collection of luxury jewelry
          </p>
        </div>

        {/* Right side - Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </h1>
              <p className="text-gray-300">
                {isSignUp ? 'Join our luxury jewelry community' : 'Welcome back to Jewelry Store'}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-red-200 text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    value={email}
                    onChange={handleEmailChange}
                    type="email"
                    placeholder="Enter your email"
                    className={`pl-12 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 ${
                      emailError ? 'border-red-400' : ''
                    }`}
                  />
                </div>
                {emailError && (
                  <p className="text-red-400 text-sm flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    value={password}
                    onChange={handlePasswordChange}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className={`pl-12 pr-12 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-yellow-400/20 ${
                      passwordError ? 'border-red-400' : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-400 text-sm flex items-center space-x-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>{passwordError}</span>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={isSignUp ? onSignUp : onSignIn}
                  disabled={loading || !!emailError || !!passwordError}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    isSignUp ? 'Create Account' : 'Sign In'
                  )}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-gray-400">or continue with</span>
                  </div>
                </div>

                <Button
                  onClick={onGoogle}
                  disabled={loading}
                  variant="outline"
                  className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 py-3 rounded-xl transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </Button>
              </div>

              {/* Toggle Sign Up/Sign In */}
              <div className="text-center pt-4">
                <p className="text-gray-300">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="ml-2 text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                  >
                    {isSignUp ? 'Sign in' : 'Sign up'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


