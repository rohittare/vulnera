
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Sample data for user submissions
const submissions = [
  {
    company: 'RefRelay', vulnerability: 'Buffer Overflow', status: 'In Process', bounty: 'NULL'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL'
  },
  {
    company: 'TechBang', vulnerability: 'Cross-Site Scripting', status: 'Approved', bounty: '5 SOL'
  },
  {
    company: 'TechBang', vulnerability: 'Buffer Overflow', status: 'Approved', bounty: '5 SOL'
  },
  {
    company: 'Cybersect', vulnerability: 'UI Error', status: 'Rejected', bounty: 'NULL'
  },
  {
    company: 'Cybersect', vulnerability: 'SQL Injection', status: 'Rejected', bounty: 'NULL'
  },
];

// Helper function to get status badge variant
const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Approved': return 'secondary'; // Using 'secondary' instead of 'success'
    case 'In Process': return 'outline';
    case 'Rejected': return 'destructive';
    default: return 'default';
  }
};

// Define the UserDashboard component
export default function UserDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, User</p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Bounty Earned</h2>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Funds Management</h2>
          <Card className='w-1/2'>
            <CardContent className='space-y-0.5'>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-10px font-medium text-gray-500">Solana Balance</p>
                  <div className="text-3xl font-bold">20.21334 SOL</div>
                  <p className="text-s text-muted-foreground">Calculated till this month</p>
                </div>
                <Image
                  src="/companyfundslogo.png"
                  alt="Solana Logo"
                  width={125}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Submissions</h2>
        <div className="rounded-md border">
          <Table className='rounded-md'>
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className='text-center'>Company</TableHead>
                <TableHead className='text-center'>Vulnerability</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className='text-center'>Bounty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-center">{submission.company}</TableCell>
                  <TableCell className='text-center'>{submission.vulnerability}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={getStatusVariant(submission.status)}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-center'>{submission.bounty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}