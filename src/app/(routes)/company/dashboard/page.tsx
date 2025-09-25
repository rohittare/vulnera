'use client'; // Added to the top

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
import { Search } from 'lucide-react';
// New Imports for Search and Filter controls
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
// import { cn } from '@/lib/utils'; // Not strictly needed for this logic

// Sample data for company bug reports (added more for pagination demo)
const bugReports = [
    { reportId: '101', severity: 'High', vulnerability: 'Buffer Overflow', status: 'In Process', action: 'Review' },
    { reportId: '102', severity: 'Low', vulnerability: 'UI Error', status: 'In Process', action: 'Review' },
    { reportId: '103', severity: 'Low', vulnerability: 'UI Error', status: 'In Process', action: 'Review' },
    { reportId: '104', severity: 'High', vulnerability: 'Cross-Site Scripting', status: 'Approved', action: 'View' },
    { reportId: '105', severity: 'Medium', vulnerability: 'Buffer Overflow', status: 'Approved', action: 'View' },
    { reportId: '106', severity: 'High', vulnerability: 'Server Error', status: 'Approved', action: 'View' },
    { reportId: '107', severity: 'Medium', vulnerability: 'Input Validation', status: 'In Process', action: 'Review' },
    { reportId: '108', severity: 'Low', vulnerability: 'UI Error', status: 'Rejected', action: 'View' },
    { reportId: '109', severity: 'Medium', vulnerability: 'SQL Injection', status: 'Rejected', action: 'View' },
    { reportId: '110', severity: 'High', vulnerability: 'Zero Day', status: 'In Process', action: 'Review' },
];

// Helper functions (same as original)
const getStatusVariant = (status: string) => {
    switch (status) {
        case 'Approved': return 'success';
        case 'In Process': return 'outline';
        case 'Rejected': return 'destructive';
        default: return 'default';
    }
};

const getSeverityColor = (severity: string) => {
    switch (severity) {
        case 'High': return 'text-red-600';
        case 'Medium': return 'text-yellow-600';
        case 'Low': return 'text-green-600';
        default: return 'text-gray-900';
    }
};

const getActionColor = (action: string) => {
    switch (action) {
        case 'Review': return 'text-blue-600';
        case 'View': return 'text-purple-600';
        default: return 'text-gray-900';
    }
};

export default function CompanyDashboard() {
    // New State for Search and Filters
    const [searchTerm, setSearchTerm] = useState('');
    const [severityFilter, setSeverityFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Helper to reset filters
    const clearAllFilters = () => {
        setSeverityFilter('All');
        setStatusFilter('All');
        setSearchTerm('');
        setCurrentPage(1);
    };

    // --- Filter Options ---
    const uniqueSeverities = useMemo(() => {
        const severities = bugReports.map(r => r.severity);
        // Sort High, Medium, Low for logical dropdown order
        const orderedSeverities = Array.from(new Set(severities)).sort((a, b) => {
            const order: Record<'High' | 'Medium' | 'Low', number> = { 'High': 1, 'Medium': 2, 'Low': 3 };
            return (order[a as keyof typeof order] || 0) - (order[b as keyof typeof order] || 0);
        });
        return ['All', ...orderedSeverities];
    }, []);

    const uniqueStatuses = useMemo(() => {
        const statuses = bugReports.map(r => r.status);
        return ['All', ...Array.from(new Set(statuses))];
    }, []);

    // --- Filtering Logic ---
    const filteredReports = useMemo(() => {
        // Reset page if filters change
        // NOTE: While setting state in useMemo is usually avoided, setting page=1 here handles the case where filtering reduces the total pages below the current page number. 
        // A cleaner approach is handling setCurrentPage(1) in the handlers (which is done below).
        let filtered = bugReports.filter(report => {
            // 1. Search Logic (Case-insensitive search on Report ID and Vulnerability)
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const searchMatch = report.reportId.includes(lowerCaseSearchTerm) ||
                report.vulnerability.toLowerCase().includes(lowerCaseSearchTerm);

            // 2. Status Filter Logic
            const statusMatch = statusFilter === 'All' || report.status === statusFilter;

            // 3. Severity Filter Logic
            const severityMatch = severityFilter === 'All' || report.severity === severityFilter;

            return searchMatch && statusMatch && severityMatch;
        });
        
        // This is a common UI pattern to reset the page if filtering drastically changes the results
        if (currentPage > Math.ceil(filtered.length / itemsPerPage) && filtered.length > 0) {
             // If the current page is now out of bounds, set it to the last valid page
             setCurrentPage(Math.ceil(filtered.length / itemsPerPage));
        } else if (filtered.length === 0 && currentPage !== 1) {
            // If no results, ensure current page is 1 (or allow it to stay as is, but resetting is cleaner)
            // We'll rely on the input/select handlers to set page to 1 for simplicity.
        }

        return filtered;
    }, [searchTerm, statusFilter, severityFilter]);

    // --- Pagination Logic ---
    const totalPages = Math.ceil(filteredReports.length / itemsPerPage);
    const paginatedReports = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredReports.slice(startIndex, endIndex);
    }, [filteredReports, currentPage]);

    const isFilterActive = severityFilter !== 'All' || statusFilter !== 'All' || searchTerm.length > 0;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>

            {/* --- Funds & New Bounty Cards --- */}
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
                                <Button className="mt-5 bg-purple-600 text-white hover:bg-purple-700">
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

            {/* --- Bug Reports Table with Filters and Pagination --- */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Bug Reports</h2>

                {/* Filter and Search Controls */}
                <div className="flex gap-4">
                    {/* Search Input */}
                    <Input
                        placeholder="Search ID or Vulnerability..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // Reset page on search
                        }}
                        className="max-w-sm"
                    />

                    {/* Severity Filter Dropdown */}
                    <Select
                        value={severityFilter}
                        onValueChange={(value) => {
                            setSeverityFilter(value);
                            setCurrentPage(1); // Reset page on filter change
                        }}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Filter by Severity" />
                        </SelectTrigger>
                        <SelectContent>
                            {uniqueSeverities.map((severity) => (
                                <SelectItem key={severity} value={severity}>
                                    {severity}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Status Filter Dropdown */}
                    <Select
                        value={statusFilter}
                        onValueChange={(value) => {
                            setStatusFilter(value);
                            setCurrentPage(1); // Reset page on filter change
                        }}
                    >
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

                {/* Active Filter Display Section */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-gray-700">Active Filters:</span>

                    {/* Severity Filter Display */}
                    {severityFilter !== 'All' && (
                        <Badge
                            variant="default"
                            className="bg-red-500 hover:bg-red-600 cursor-pointer"
                            onClick={() => {setSeverityFilter('All'); setCurrentPage(1);}}
                        >
                            Severity: {severityFilter}
                        </Badge>
                    )}

                    {/* Status Filter Display */}
                    {statusFilter !== 'All' && (
                        <Badge
                            variant="default"
                            className="bg-blue-500 hover:bg-blue-600 cursor-pointer"
                            onClick={() => {setStatusFilter('All'); setCurrentPage(1);}}
                        >
                            Status: {statusFilter}
                        </Badge>
                    )}

                    {/* Search Term Display */}
                    {searchTerm && (
                        <Badge
                            variant="default"
                            className="bg-green-500 hover:bg-green-600 cursor-pointer"
                            onClick={() => {setSearchTerm(''); setCurrentPage(1);}}
                        >
                            Search: "{searchTerm}"
                        </Badge>
                    )}

                    {/* Clear All Button */}
                    {isFilterActive && (
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 text-xs text-gray-500 hover:text-gray-900"
                            onClick={clearAllFilters}
                        >
                            Clear All
                        </Button>
                    )}

                    {!isFilterActive && (
                        <span className="text-gray-400">None</span>
                    )}
                </div>

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
                            {paginatedReports.length > 0 ? (
                                paginatedReports.map((report) => (
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
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center text-gray-500">
                                        No bug reports found matching your criteria.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                    {/* Pagination Controls */}
                    {filteredReports.length > itemsPerPage && (
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