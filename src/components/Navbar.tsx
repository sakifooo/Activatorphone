
"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="py-6 px-4 md:px-12 border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand">
          <Link href="/">
            <h5 className="text-xl font-bold text-white tracking-tight uppercase">
              <span className="text-primary">A</span>CTIVATOR<span className="text-primary">P</span>HONE
            </h5>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none p-0 m-0 items-center">
            <li>
              <Link 
                href="https://t.me/Ydoubletools" 
                target="_blank" 
                className="text-[#8a94a7] hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.823 8.356c-.167 1.745-1.045 7.147-1.492 9.537-.189 1.012-.562 1.352-.923 1.385-.785.071-1.382-.52-2.142-1.018-1.189-.78-1.861-1.265-3.015-2.025-1.334-.878-.469-1.361.291-2.148.199-.206 3.65-3.35 3.717-3.635.008-.035.016-.166-.062-.235-.078-.069-.193-.046-.276-.027-.118.026-1.996 1.268-5.632 3.724-.532.366-1.014.544-1.446.535-.477-.01-1.394-.269-2.076-.49-.836-.271-1.503-.414-1.445-.875.03-.24.36-.486.99-.738 3.868-1.684 6.447-2.793 7.737-3.328 3.682-1.527 4.447-1.792 4.945-1.801.11-.002.355.025.514.154.133.109.17.256.182.357.013.102.023.332.012.449z" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
