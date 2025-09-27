'use client';

import { useParams, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from "next/link"
import { Building2, Bug, DollarSign, Hash, ArrowLeft, FileDown, Route } from "lucide-react"

// Using the same submissions data - in a real app, this would be in a shared store or database
let data = [
  {
    company: 'RefRelay', vulnerability: 'Buffer Overflow', status: 'In Process', bounty: 'NULL',
    description: 'Initial buffer overflow vulnerability found in the main application.',
    reportId: 'RPT-2024-0001'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL',
    description: 'User interface vulnerability affecting the main dashboard.',
    reportId: 'RPT-2024-0002'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL',
    description: 'UI vulnerability in the user profile section.',
    reportId: 'RPT-2024-0003'
  },
  {
    company: 'TechBang', vulnerability: 'Cross-Site Scripting', status: 'Approved', bounty: '5 SOL',
    description: 'XSS vulnerability found in the comment section.',
    reportId: 'RPT-2024-0004'
  },
  {
    company: 'TechBang', vulnerability: 'Buffer Overflow', status: 'Approved', bounty: '5 SOL',
    description: 'Critical buffer overflow in the authentication system.',
    reportId: 'RPT-2024-0005'
  },
  {
    company: 'Cybersect', vulnerability: 'UI Error', status: 'Rejected', bounty: 'NULL',
    description: 'Minor UI inconsistency in the settings page.',
    reportId: 'RPT-2024-0006'
  },
  {
    company: 'Cybersect', vulnerability: 'SQL Injection', status: 'Rejected', bounty: 'NULL',
    description: 'Potential SQL injection vulnerability in the search function.',
    reportId: 'RPT-2024-0007'
  },
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

export default function SubmissionDetail() {
  const router = useRouter();
  const params = useParams();
  const submissionId = parseInt(params.id as string);
  const submission = data[submissionId];

  if (!submission) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Submission not found</h1>
        <Link href="/dashboard" className="text-blue-500 underline mr-4">
          <Button >Go Back</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-6 md:p-10">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">Submission Details</h1>

        <Button asChild variant="outline" className="gap-2 bg-transparent">
          <Link href="/dashboard" className="flex items-center gap-2">
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Back to Dashboard</span>
          </Link>
        </Button>
      </header>

      <Card className="overflow-hidden">
        <div className="h-1 w-full bg-[#9438FF] " aria-hidden="true" />
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-balance">
              <Hash className="size-5 text-muted-foreground" aria-hidden="true" />
              <span>
                Report ID: <span className="font-semibold text-foreground">{data[submissionId].reportId}</span>
              </span>
            </CardTitle>

            <Badge className="bg-primary/10 text-[#9438FF]  ring-1 ring-inset ring-primary/20">{data[submissionId].status}</Badge>
          </div>
        </CardHeader>

        <CardContent className="grid gap-8">
          {/* At-a-glance metadata */}
          <section aria-labelledby="metadata" className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 size-5 text-[#9438FF] " aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted-foreground">Company</p>
                  <p className="text-base font-medium">{data[submissionId].company}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-start gap-3">
                <Bug className="mt-0.5 size-5 text-[#9438FF] " aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted-foreground">Vulnerability Type</p>
                  <p className="text-base font-medium">{data[submissionId].vulnerability}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 size-5 text-[#9438FF] " aria-hidden="true" />
                <div>
                  <p className="text-sm text-muted-foreground">Bounty</p>
                  <p className="text-base font-semibold tracking-tight">{data[submissionId].bounty}</p>
                </div>
              </div>
            </div>

            {/* Spacer to balance grid on larger screens */}
          </section>

          {/* Description */}
          <section aria-labelledby="description">
            <h2 id="description" className="mb-2 text-sm font-medium text-muted-foreground">
              Vulnerability Description
            </h2>
            <div className="rounded-lg border bg-muted/40 p-4">
              <p className="leading-relaxed">{data[submissionId].description}</p>
            </div>
          </section>

          {/* Actions */}
          <section aria-labelledby="actions" className="flex items-center justify-between">
            <h2 id="actions" className="text-sm font-medium text-muted-foreground">
              Actions
            </h2>
            <button className="px-6 flex items-center justify-center gap-2 py-2 bg-[#9438FF] text-white rounded-md hover:bg-[#7a2de6] transition-colors duration-300">
              <FileDown className="size-4" aria-hidden="true" />
              Download Report
            </button>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}