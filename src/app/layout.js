
import localFont from "next/font/local";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "인터랙티브 - 다문화 실패 선언한 유럽과 주변국 사례탐사",
  description: "다문화 실패 선언한 유럽과 주변국 사례탐사",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="main_container">
          <div className="container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
