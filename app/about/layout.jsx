import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export const metadata = {
  title: `About Ideal Mobile`,
};

function AboutLayout({ children }) {
  return (
   <>
    <div className="flex min-h-screen flex-col">
       <Header />
       <main className="flex-1 wrapper">
        {children}
       </main>
      <Footer />
    </div></>
  )
}

export default AboutLayout
