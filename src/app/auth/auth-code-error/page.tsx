export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">Authentication error</h1>
        <p className="text-gray-600 mb-6">
          We couldn't complete the sign-in process. Please try again or use a different method.
        </p>
        <a href="/login" className="text-gray-900 underline">Back to sign in</a>
      </div>
    </div>
  )
}


