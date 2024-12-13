import Header from "../components/header";
import HeaderMobile from "../components/header-mobile";
import MarginWidthWrapper from "../components/margin-width-wrapper";
import PageWrapper from "../components/page-wrapper";
import SideNav from "../components/side-nav";

export default function SimpleRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white`}>
        <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
