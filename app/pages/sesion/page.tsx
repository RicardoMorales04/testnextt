import Menu from "@/components/Menu"
import Footer from "@/components/footer"

export default function Test(){
    return(
        <>
            <Menu/>
            <div className="flex min-h-screen flex-col items-center justify-between p-24">
                Bienvenido A Sesión
            </div>
            <Footer/>
        </>
    )
}