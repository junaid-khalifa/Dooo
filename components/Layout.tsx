import { LayoutProps } from "../types"
import Navigation from "./Signup/Navigation"

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=''>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
