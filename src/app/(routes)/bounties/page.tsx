import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import {
  ChevronDownIcon,
  FilterIcon,
  CodeIcon,
  PackageIcon,
  LayoutGridIcon,
  SearchIcon,
  SortAscIcon,
} from "lucide-react"
import Image from "next/image"

export default function page() {
  const bounties = [
    {
      id: "1",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "2",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "3",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "4",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
    {
      id: "5",
      logo: "/refrealy-logo.jpg",
      name: "RefRealy",
      description:
        "RefRelay streamlines employee referrals, helping companies hire faster through automated, trackable referral processes.",
      startedDate: "10 May 2021",
      lastUpdated: "15 Sep 2025",
      totalBugsFound: 48,
      amount: "Up to 2000 SOL",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bounties</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back, User/Company</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-900 text-white p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">RefRealy Deposited</p>
              <p className="text-3xl font-bold">2000.21 SOL</p>
              <p className="text-sm text-gray-400">Bounties of RefRealy are live.</p>
            </div>
            <Image
              src="/refrealy-logo.jpg"
              width={64}
              height={64}
              alt="RefRealy Logo"
              className="rounded-full"
            />
          </Card>
          <Card className="bg-gray-900 text-white p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">PranavRam Earned</p>
              <p className="text-3xl font-bold">2.21 SOL</p>
              <p className="text-sm text-gray-400">Bounty from Jobforces.</p>
            </div>
            <Image src="/jpg-example-file-download-500x500.jpg" width={64} height={64} alt="Solana Logo" className="rounded-full" />
          </Card>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <FilterIcon className="h-4 w-4" />
                Category
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <CodeIcon className="h-4 w-4" />
                Language
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <PackageIcon className="h-4 w-4" />
                Project Type
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <LayoutGridIcon className="h-4 w-4" />
                Platform
                <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="relative flex-1 w-full">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input type="search" placeholder="Search by ID or name" className="w-full pl-9" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <SortAscIcon className="h-4 w-4" />
              Sort by
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-4">
        {bounties.map((bounty) => (
          <Card key={bounty.id} className="flex">
            <div className="flex items-center gap-4 p-4 w-full">
                            <Image
              src={bounty.logo || "/placeholder.svg"}
              width={40}
              height={40}
              alt={`${bounty.name} Logo`}
              className="rounded-full"
            />
            <div className="">
              <h3 className="font-semibold">{bounty.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{bounty.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <span>Started date: {bounty.startedDate}</span>
                <span>Last Updated: {bounty.lastUpdated}</span>
                <span>Total Bugs Found: {bounty.totalBugsFound}</span>
              </div>
            </div>
            <div className="ml-auto font-semibold">{bounty.amount}</div>
            </div>

          </Card>
        ))}
      </div>
    </div>
  )
}
