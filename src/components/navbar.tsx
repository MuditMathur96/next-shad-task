"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const links =[
    {
        title:"Prompts",
        href:"/prompts"
    },
    {   
        title:"Bcf Boards",
        href:"/bcf-boards"
    }
]


const NavItem = ({href,active,children}:{href:string,
    children:string
    active:boolean
    })=>{
    
    return (<div>
        <Link
        className={cn("p-2 duration-200",

        active && "bg-gray-200 rounded-md "
        )}
        href={href}
        >
        {children}
        </Link>
    </div>)
}

const Navbar =()=>{
    const pathName = usePathname();
    return (<nav
    className="h-14 w-full shadow-md  fixed top-0 bg-white z-[10] 
    md:px-12 px-4
    "
    >
    <div
    className=" h-full
    flex justify-between items-center
    p-2     
    "
    >
        <NavItem
        href={"/"}
        active={false}
        >Home</NavItem>

        <div className="flex items-center justify-end space-x-4">
        {
            links.map((l)=>{
                return <NavItem
                key={l.title}
                href={l.href}
                active={pathName.includes(l.href)}
                >{l.title}</NavItem>
            })
        }
        </div>

    </div>

    </nav>)

}

export default Navbar;