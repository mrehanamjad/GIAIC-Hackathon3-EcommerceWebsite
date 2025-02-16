import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#8C6239] text-white py-8 z-40 w-full">
      <div className="w-full mx-auto px-4 z-40">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Royal Furniture Admin. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <Link href="/privacy" className="hover:text-brown-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brown-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-brown-300">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

