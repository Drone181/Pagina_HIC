import { useEffect, useState } from "react"
import Image from "./Image";
import { Link } from "react-router-dom";
import { 
    SignedIn,
    SignedOut, 
    useAuth, 
    UserButton 
} from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const { getToken } = useAuth()

    useEffect(()=>{
        getToken().then((token) => console.log(token))
    }, [])

  return (
    <div className="w-full bg-[#522c45] px-0 mx-0 left-0 right-0 relative">
      <div className='w-full h-18 md:h-24 flex items-center justify-between max-w-screen-xl mx-auto px-4'>
          {/*LOGO*/}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <img src="/LogoHIC.png" alt="HIC Logo" width={180} height={180} className="object-contain" />
              {/* <span>lamalogo</span> */}
          </Link>

          {/*MOBILE MENU*/}
          <div className="md:hidden">
              {/*MOBILE BUTTON*/}
              <div className="cursor-pointer text-2xl text-white" onClick={()=> setOpen((prev)=> !prev)}>{open ? "X":"="}
              </div>
              {/*MOBILE LINK LIST*/}
              <div className={`w-full h-screen flex flex-col items-center justify-center gap-6 font-medium text-lg fixed top-14 left-0 transition-all ease-in-out bg-[#522c45] ${open ? "opacity-100 z-50" : "opacity-0 -z-10"}`}>
                  <Link to="/" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Inicio</Link>
                  <Link to="/agendar-cita" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Agendar cita</Link>
                  <Link to="/cirugia-ambulatoria" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Cirugía Ambulatoria</Link>
                  <Link to="/especialidades-pediatricas" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Especialidades Pediátricas</Link>
                  <Link to="/ciappi" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">CIAPPI</Link>
                  <Link to="/telesalud" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Telesalud</Link>
                  <Link to="/noticias" className="text-green-400 hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Noticias</Link>
                  <Link to="/contacto" className="text-white hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Contacto</Link>
                  <SignedOut>
                      <Link to="/login">
                          <button className="py-1 px-3 rounded-3xl bg-blue-800 text-white">Login</button>
                      </Link>
                  </SignedOut>
                  <SignedIn>
                      <UserButton />
                  </SignedIn>
              </div>
          </div>

          {/*DESKTOP MENU*/}
          <div className="hidden md:flex items-center gap-2 xl:gap-3 font-medium text-white text-sm">
              <Link to="/" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Inicio</Link>
              <Link to="/agendar-cita" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Agendar cita</Link>
              <Link to="/cirugia-ambulatoria" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Cirugía Ambulatoria</Link>
              <Link to="/especialidades-pediatricas" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Especialidades Pediátricas</Link>
              <Link to="/ciappi" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">CIAPPI</Link>
              <div className="relative group">
                <Link to="/telesalud" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors flex items-center">
                  Telesalud <span className="ml-0.5">▼</span>
                </Link>
              </div>
              <Link to="/noticias" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Noticias</Link>
              <Link to="/contacto" className="hover:bg-[#3d2033] px-2 py-1 rounded transition-colors">Contacto</Link>
              <SignedOut>
                  <Link to="/login">
                      <button className="py-1 px-3 rounded-3xl bg-blue-800 text-white hover:bg-blue-900 transition-colors ml-1">Login</button>
                  </Link>
              </SignedOut>
              <SignedIn>
                  <UserButton />
              </SignedIn>
          </div>
      </div>
    </div>
  )
}

export default Navbar