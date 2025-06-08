// import { Bell, Search } from "lucide-react"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "./Button"

// export function AdminHeader() {
//   return (
//     <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
//       <div className="flex-1">
//         <form className="relative max-w-md">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//           {/* <Input type="search" placeholder="Search..." className="pl-8" /> */}
//         </form>
//       </div>
//       <div className="flex items-center gap-4">
//         <Button variant="ghost" size="icon">
//           <Bell className="h-4 w-4" />
//         </Button>
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="relative h-8 w-8 rounded-full">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
//                 <AvatarFallback>AD</AvatarFallback>
//               </Avatar>
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-56" align="end" forceMount>
//             <DropdownMenuLabel className="font-normal">
//               <div className="flex flex-col space-y-1">
//                 <p className="text-sm font-medium leading-none">Admin User</p>
//                 <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
//               </div>
//             </DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Profile</DropdownMenuItem>
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Log out</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   )
// }
