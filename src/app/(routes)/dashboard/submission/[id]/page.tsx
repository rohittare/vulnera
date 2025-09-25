'use client';

import { useParams, useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Using the same submissions data - in a real app, this would be in a shared store or database
let submissions = [
  {
    company: 'RefRelay', vulnerability: 'Buffer Overflow', status: 'In Process', bounty: 'NULL',
    description: 'Initial buffer overflow vulnerability found in the main application.'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL',
    description: 'User interface vulnerability affecting the main dashboard.'
  },
  {
    company: 'Jobforces', vulnerability: 'UI Error', status: 'In Process', bounty: 'NULL',
    description: 'UI vulnerability in the user profile section.'
  },
  {
    company: 'TechBang', vulnerability: 'Cross-Site Scripting', status: 'Approved', bounty: '5 SOL',
    description: 'XSS vulnerability found in the comment section.'
  },
  {
    company: 'TechBang', vulnerability: 'Buffer Overflow', status: 'Approved', bounty: '5 SOL',
    description: 'Critical buffer overflow in the authentication system.'
  },
  {
    company: 'Cybersect', vulnerability: 'UI Error', status: 'Rejected', bounty: 'NULL',
    description: 'Minor UI inconsistency in the settings page.'
  },
  {
    company: 'Cybersect', vulnerability: 'SQL Injection', status: 'Rejected', bounty: 'NULL',
    description: 'Potential SQL injection vulnerability in the search function.'
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
  const submission = submissions[submissionId];
  
  if (!submission) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Submission not found</h1>
        <Button onClick={() => router.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Submission Details</h1>
        {/* MODIFIED: Added custom className for hover effect */}
        <Button onClick={() => router.back()} variant="outline" className="hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
          Back to Dashboard
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Report ID: #{params.id}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Company</h3>
              <p className="mt-1 text-lg font-medium">{submission.company}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <div className="mt-1">
                <Badge variant={getStatusVariant(submission.status)}>
                  {submission.status}
                </Badge>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Vulnerability Type</h3>
              <p className="mt-1 text-lg font-medium">{submission.vulnerability}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Bounty</h3>
              <p className="mt-1 text-lg font-medium">{submission.bounty}</p>
            </div>
          </div>

          {/* Additional Details Section */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium mb-4">Vulnerability Description</h3>
            <p className="text-gray-600">{submission.description}</p>
          </div>

          {/* Actions Section */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium mb-4">Actions</h3>
            <div className="flex space-x-4">
              {/* MODIFIED: Added custom className for hover effect */}
              <Button variant="outline" className="hover:bg-gray-200 cursor-pointer transition-colors duration-200">Download Report</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}