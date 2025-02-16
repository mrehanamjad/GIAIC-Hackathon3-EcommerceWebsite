import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className="bg-white shadow-md z-40 w-full">
      <div className="w-full mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-brown-600">
            Royal Furniture Admin
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-brown-600">
            Dashboard
          </Link>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          
        </nav>
      </div>
    </header>
  )
}

