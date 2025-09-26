'use client';

import React, { useState, useMemo } from 'react';
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming an Input component exists
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Assuming Select components exist

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
    case 'Approved': return 'success';
    case 'In Process': return 'outline';
    case 'Rejected': return 'destructive';
    default: return 'default';
  }
};

// Define the UserDashboard component
export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page

  // Use useMemo to filter and search the submissions data
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(submission => {
      // Status filter logic
      const statusMatch = statusFilter === 'All' || submission.status === statusFilter;

      // Search term logic (case-insensitive search across company and vulnerability)
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const searchMatch = submission.company.toLowerCase().includes(lowerCaseSearchTerm) ||
                          submission.vulnerability.toLowerCase().includes(lowerCaseSearchTerm);

      return statusMatch && searchMatch;
    });
  }, [searchTerm, statusFilter]); // Re-run the calculation when these states change

  // Calculate pagination
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSubmissions.slice(startIndex, endIndex);
  }, [filteredSubmissions, currentPage]);

  // Get unique statuses for the filter dropdown
  const uniqueStatuses = useMemo(() => {
    const statuses = submissions.map(s => s.status);
    return ['All', ...Array.from(new Set(statuses))];
  }, []);


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
                {/* NOTE: You will need to ensure '/companyfundslogo.png' exists for this to work */}
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

      {/* --- */}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Submissions</h2>
        
        {/* Filter and Search Controls */}
        <div className="flex gap-4">
          {/* Search Input */}
          <Input
            placeholder="Search company or vulnerability..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          
          {/* Status Filter Dropdown */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              {uniqueStatuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
        </div>

        {/* Submissions Table */}
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
              {paginatedSubmissions.length > 0 ? (
                paginatedSubmissions.map((submission, index) => (
                  <TableRow 
                    key={index}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={() => window.location.href = `/dashboard/submission/${index}`}
                  >
                    <TableCell className="font-medium text-center">{submission.company}</TableCell>
                    <TableCell className='text-center'>{submission.vulnerability}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getStatusVariant(submission.status)}>
                        {submission.status}
                      </Badge>
                    </TableCell>
                    <TableCell className='text-center'>{submission.bounty}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center text-gray-500">
                    No submissions found matching your criteria.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          
          {/* Pagination Controls */}
          {filteredSubmissions.length > 0 && (
            <div className="mt-4 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}