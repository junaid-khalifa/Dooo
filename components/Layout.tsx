import { LayoutProps } from "../types"

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
