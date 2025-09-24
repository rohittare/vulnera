
import { Sidebar } from '@/components/sidebar' ;
import { cn } from '@/lib/utils';

// Define the DashboardLayout component
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('flex h-screen')}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}