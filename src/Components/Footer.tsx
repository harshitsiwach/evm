import Image from "next/image"
import Link from "next/link"
import Download from "./download";
import { Dock, DockIcon } from "@/Components/magicui/dock";
export type IconProps = React.HTMLAttributes<SVGElement>;
function Footer() {
  return (
    <div className=" sm:p-9 p-1 z-20 bottom-0 fixed flex  w-full justify-between items-center h-[80px] bg-transparent sm:bg-transparent ">
        <div className="text-xs font-bold sm:text-xs gap-2 sm:gap-5  md:gap-9 flex text-red-600">
           
            <div className="">
               
               <Download/>
               
               </div>
              
               <Link href="/privacypolicy">
               <div className="cursor-pointer hover:text-white">
                PRIVACY POLICY
               </div>
               </Link>

               <Link href="/brandkit">
               <div className="cursor-pointer hover:text-white">
                BRAND KIT
               </div>
               </Link>
          
        </div>
        <div className="flex items-center justify-center sm:mr-0 mr-3">
            <Link href={"/"}>
            <Image className="bg-transparent transition-transform hover:scale-110 cursor-pointer" src='/logoBlackT.png' alt="image" width={70} height={80}/>
            </Link>
            
        </div>
        <div className="flex text-xs md:text-xs font-bold sm:gap-3 gap-1 items-center">

        <Dock>
        <DockIcon>
          <Icons.gitHub className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.googleDrive className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.notion className="h-6 w-6" />
        </DockIcon>
        <DockIcon>
          <Icons.openai className="h-6 w-6" />
        </DockIcon>
      </Dock>
            
            </div>
        </div>
    
  )
}

const Icons = {
    gitHub: (props: IconProps) => (
       <Link target="_blank" rel="noopener noreferrer" href='https://x.com/rupturelabs'>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="auto" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.226 18L9.19002 12.2473L4.13753 18H2L8.24169 10.8953L2 2H7.48796L11.2918 7.42183L16.0578 2H18.1953L12.2433 8.77562L18.7139 18H13.226ZM15.6063 16.3782H14.1673L5.06062 3.62182H6.49988L10.1472 8.72957L10.7779 9.6159L15.6063 16.3782Z" fill="#F52239"></path></svg>

            </Link>
    ),
    notion: (props: IconProps) => (
     <Link target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/evm_warfare/'>
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 24 24">
                <path fill="#F52239" d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
            </Link>
    ),
    openai: (props: IconProps) => (
     <Link target="_blank" rel="noopener noreferrer" href='https://discord.gg/NxKsgZcX'> 
            <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 50 50">
            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" fill="#F52239"></path>
            </svg>
            </Link>
    ),
    googleDrive: (props: IconProps) => (
        <Link target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/channel/UC-az3TnwxRTeXrhkqlwJfiw'> 
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0,0,256,256">
         <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(3.2,3.2)"><path d="M75.67,57.783c-0.758,3.92 -3.98,6.907 -7.96,7.467c-6.254,0.933 -16.219,2 -27.97,2c-11.561,0 -21.586,-1.067 -28.03,-2c-3.98,-0.56 -7.202,-3.547 -7.96,-7.467c-0.758,-4.293 -1.351,-9.89 -1.351,-17.73c0,-7.84 0.718,-13.437 1.476,-17.73c0.758,-3.92 3.98,-6.907 7.96,-7.467c6.254,-0.933 16.28,-2.107 28.03,-2.107c11.75,0 21.526,1.173 27.97,2.107c3.98,0.56 7.202,3.547 7.96,7.467c0.758,4.293 1.746,9.89 1.746,17.73c-0.19,7.84 -1.113,13.437 -1.871,17.73z" fill="#f52239"></path><path d="M39.905,13c11.72,0 21.851,1.111 28.29,2.044c3.584,0.504 6.444,3.183 7.115,6.65c0.725,4.11 1.69,10.479 1.69,18.282c-0.213,8.826 -1.151,15.273 -1.688,18.314c-0.674,3.483 -3.534,6.162 -7.126,6.668c-4.114,0.614 -15.108,2.042 -28.281,2.042c-12.338,0 -23.018,-1.28 -28.29,-2.044c-3.584,-0.504 -6.444,-3.183 -7.115,-6.65c-0.684,-3.878 -1.5,-10.201 -1.5,-18.306c0,-8.105 0.816,-14.428 1.498,-18.29c0.674,-3.483 3.534,-6.162 7.126,-6.668c4.115,-0.614 15.108,-2.042 28.281,-2.042M39.905,12c-11.751,0 -22.175,1.12 -28.429,2.053c-3.98,0.56 -7.202,3.547 -7.96,7.467c-0.758,4.293 -1.516,10.64 -1.516,18.48c0,7.84 0.758,14.187 1.516,18.48c0.758,3.92 3.98,6.907 7.96,7.467c6.444,0.933 16.868,2.053 28.429,2.053c11.751,0 22.175,-1.12 28.429,-2.053c3.98,-0.56 7.202,-3.547 7.96,-7.467c0.758,-4.293 1.516,-10.64 1.706,-18.48c0,-7.84 -0.948,-14.187 -1.706,-18.48c-0.758,-3.92 -3.98,-6.907 -7.96,-7.467c-6.444,-0.933 -16.678,-2.053 -28.429,-2.053z" fill="#c74343"></path><path d="M32,53v-26l24,13z" fill="#ffffff"></path></g></g>
         </svg>
         </Link>
    ),
    
  };

export default Footer
            // <div className="bg-transparent">
            // <Link target="_blank" rel="noopener noreferrer" href='https://twitter.com/evmwarfare'>
            // <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="40" viewBox="0 0 48 48">
            // <path fill="#F52239" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
            // </svg>
            // </Link>

            // </div>
            // <div >
            
            // </div>
            // <div>
            
            
            // </div>
            // <div>
            // 