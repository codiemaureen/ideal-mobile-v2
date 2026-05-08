import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

function ServiceAreaLayout({ children }) {
   return (
      <>
         <div className="flex min-h-screen flex-col">
            <Header />
            <main className="mt-40 flex-1 wrapper">
            {children}
            </main>
            <Footer />
         </div>
      </>
   )
}

export default ServiceAreaLayout
