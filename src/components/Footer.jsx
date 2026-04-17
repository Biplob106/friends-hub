import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a31] text-white py-12 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
      
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          KeenKeeper
        </h2>

  
        <p className="text-gray-300 text-sm md:text-base max-w-2xl text-center mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

   
        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-lg font-medium">Social Links</span>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3a31] hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3a31] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1e3a31] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

      
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}