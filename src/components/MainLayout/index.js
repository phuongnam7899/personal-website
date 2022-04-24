import { NavBar } from ".."
import { Footer } from ".."

export const MainLayout = ({children}) => {
    return <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
}