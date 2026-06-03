
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="brand-footer">
            <h5 className="text-xl font-bold text-white tracking-tight uppercase mb-4">
              <span className="text-primary">A</span>CTIVATOR<span className="text-primary">P</span>HONE
            </h5>
            <p className="text-sm max-w-xs text-[#8a94a7]">
              &copy; 2020-2026 ACTIVATORPHONE LTD, All rights reserved.
            </p>
          </div>
          
          <ul className="footer-links list-none p-0 flex flex-wrap gap-6 md:gap-12">
            <li><Link href="#" className="text-sm text-[#8a94a7] hover:text-[#0fb7b3]">Terms of Agreement</Link></li>
            <li><Link href="#" className="text-sm text-[#8a94a7] hover:text-[#0fb7b3]">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-[#8a94a7] hover:text-[#0fb7b3]">Refund Policy</Link></li>
            <li><Link href="https://t.me/iosremoval" className="text-sm text-[#8a94a7] hover:text-[#0fb7b3]">Contact</Link></li>
            <li><Link href="mailto:support@activatorphone.com" className="text-sm text-[#8a94a7] hover:text-[#0fb7b3]">Support</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
