
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
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data for company bug reports
const bugReports = [
  { reportId: '101', severity: 'High', vulnerability: 'Buffer Overflow', status: 'In Process', action: 'Review' },
  { reportId: '102', severity: 'Low', vulnerability: 'UI Error', status: 'In Process', action: 'Review' },
  { reportId: '103', severity: 'Low', vulnerability: 'UI Error', status: 'In Process', action: 'Review' },
  { reportId: '104', severity: 'High', vulnerability: 'Cross-Site Scripting', status: 'Approved', action: 'View' },
  { reportId: '105', severity: 'Medium', vulnerability: 'Buffer Overflow', status: 'Approved', action: 'View' },
  { reportId: '108', severity: 'Low', vulnerability: 'UI Error', status: 'Rejected', action: 'View' },
  { reportId: '109', severity: 'Medium', vulnerability: 'SQL Injection', status: 'Rejected', action: 'View' },
];

// Helper function to get status badge variant
const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Approved': return 'secondary';
    case 'In Process': return 'outline';
    case 'Rejected': return 'destructive';
    default: return 'default';
  }
};

// Helper function to get severity text color
const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'High': return 'text-red-600';
    case 'Medium': return 'text-yellow-600';
    case 'Low': return 'text-green-600';
    default: return 'text-gray-900';
  }
};

// Helper function to get action button color
const getActionColor = (action: string) => {
  switch (action) {
    case 'Review': return 'text-blue-600';
    case 'View': return 'text-purple-600';
    default: return 'text-gray-900';
  }
};

export default function CompanyDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Funds Management Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Funds Management</h2>
          <Card>
            <CardContent className="">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-10px font-medium text-gray-500">Current Funds</p>
                  <div className="text-3xl font-bold">20000.21 SOL</div>
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
              <Button className="w-3/5 bg-purple-600 text-white hover:bg-purple-700">
                Deposit More Funds
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Post a new Bounty Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Post a new Bounty</h2>
          <Card>
            <CardContent className="flex items-center space-x-3 p-1">
              <div className="flex-1 pl-5">
                <p className="text-s text-muted-foreground pb-7">
                  Engage users by rewarding them for reporting valuable leads into your new project
                </p>
                <Button className="mt-4  bg-purple-600 text-white hover:bg-purple-700">
                  New Bounty
                </Button>
              </div>
              <div className="rounded-full p-4">
                <Search className="h-30 w-30 text-black" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Bug Reports Table */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Bug Reports</h2>
        <div className="rounded-md border">
          <Table className='rounded-md'>
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className='text-center'>Report ID</TableHead>
                <TableHead className='text-center'>Severity</TableHead>
                <TableHead className='text-center'>Vulnerability</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bugReports.map((report) => (
                <TableRow key={report.reportId}>
                  <TableCell className="font-medium text-center">#{report.reportId}</TableCell>
                  <TableCell className="text-center">
                    <span className={getSeverityColor(report.severity)}>
                      {report.severity}
                    </span>
                  </TableCell>
                  <TableCell className='text-center'>{report.vulnerability}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={getStatusVariant(report.status)}>
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button variant="link" className={getActionColor(report.action)}>
                      {report.action}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}