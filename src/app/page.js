"use client"; // This makes the component a Client Component

import Image from "next/image";
import Link from "next/link"; // Import the Link component

export default function LoginPage() {
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    // Add your authentication logic here
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="bg-gray-100 grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-8 lg:p-16 font-[family-name:var(--font-geist-sans)]">
      
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between w-full max-w-6xl py-4 bg-gray-800 rounded-lg p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
          <Link href="/" className="hover:text-gray-400">Clobknocka</Link>
        </h1>
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
          <Link href="/" className="text-sm hover:text-gray-400">Home</Link>
          <Link href="/explore" className="text-sm hover:text-gray-400">Explore</Link>
          <Link href="/help" className="text-sm hover:text-gray-400">Help</Link>
          <Link href="/register" className="text-sm hover:text-gray-400">Register</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow gap-8">
  {/* Username and password box */}
  <form 
    onSubmit={handleLogin} 
    className="flex flex-col gap-4 w-full max-w-xs bg-gray-700 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg"
  >
    <div className="form-group">
      <label htmlFor="username" className="text-sm sm:text-base  text-gray-100">Username Or Email:</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        className="border border-gray-300 rounded px-2 py-2 sm:py-3 bg-gray-100 w-full text-gray-500"
      />
    </div>
    <div className="form-group">
      <label htmlFor="password" className="text-sm sm:text-base text-gray-100">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="border border-gray-300 rounded px-2 py-2 sm:py-3 bg-gray-200 w-full text-gray-500"
      />
    </div>
    <button
      type="submit"
      className="rounded-full border border-transparent transition-colors bg-gray-500 text-white h-10 sm:h-12 px-4 sm:px-6 hover:bg-gray-200 w-full hover:text-gray-800"
    >
      Login
    </button>
  </form>
</main>


        <div className="flex flex-col sm:flex-row gap-6 flex-wrap items-center justify-center w-full text-center">
                <p className="text-sm sm:text-base text-gray-900">
                  {`Don't have an account?`} <Link href="/register" className="underline">Register here</Link>
                </p>
                <p className="text-sm sm:text-base text-gray-900">
                  {`Forgotten Password?`} <Link href="/change-password" className="underline">Change your password here</Link>
                </p>
                <p className="text-sm sm:text-base text-gray-900">
                  {`Forgotten Email?`} <Link href="/change-email" className="underline">Change your Email here</Link>
                </p>
        </div>


      
    </div>
  );
}

