import {Navbar} from "../components/Navbar"
import "../styles/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head > 
        <title>My first page with nextJS</title>
        
      </head>
      <body>
        {/* <header> */}
          <Navbar />
        {/* </header> */}
        
        {children}
      </body>
    </html>
  )
}
