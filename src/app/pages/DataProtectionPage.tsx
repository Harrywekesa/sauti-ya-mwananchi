import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ShieldAlert, Database, UserCheck, Scale, FileText } from 'lucide-react';

export function DataProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-4">
            <ShieldAlert className="h-8 w-8 text-kenya-green" />
            Data Protection Policy
          </h1>
          <p className="text-gray-600">
            Last updated: November 12, 2025
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-kenya-green" />
                Compliance with Kenya Data Protection Act, 2019
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Wananchi Voice is fully compliant with the <strong>Kenya Data Protection Act, 2019</strong> and the guidelines established by the Office of the Data Protection Commissioner (ODPC). 
              </p>
              <p>
                We serve as a Data Controller and Data Processor for the information you share on the platform, committed to processing it fairly, transparently, and securely.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-kenya-green" />
                Principles of Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                We adhere to the core principles of data protection as defined in Section 25 of the Act:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Purpose Limitation:</strong> We collect location demographics (County, Sub-county, Ward) solely to filter and tailor relevant governance issues to your profile.
                </li>
                <li>
                  <strong>Data Minimization:</strong> We only collect the minimal personal data required to register your account and verify your vote.
                </li>
                <li>
                  <strong>Integrity and Confidentiality:</strong> Your data is protected by state-of-the-art encryption protocols in transmission and at rest.
                </li>
                <li>
                  <strong>Accuracy:</strong> You can edit your demographic location and profile details at any time in your Settings panel.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-kenya-green" />
                Your Rights as a Data Subject
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>
                Under Section 26 of the Act, you have explicit rights which you can exercise through our helpdesk:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to be informed of how your personal data is used.</li>
                <li>Right to access personal data in our possession.</li>
                <li>Right to object to the processing of your data.</li>
                <li>Right to correction of false or misleading data.</li>
                <li>Right to deletion or erasure of false or unlawfully processed data.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-kenya-green" />
                Data Protection Officer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>
                If you have questions regarding data processing, security audits, or wish to exercise your rights under the Data Protection Act, please contact our Data Protection Officer:
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p><strong>Email:</strong> dpo@wananchivoice.go.ke</p>
                <p><strong>ODPC Registration Number:</strong> ODPC/REG/2025/00472</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
