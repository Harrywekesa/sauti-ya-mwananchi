import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

export function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-kenya-green" />
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: November 12, 2025
          </p>
        </div>

        <Alert className="mb-8">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Wananchi Voice is committed to protecting your privacy and ensuring transparency in how we handle your data. This platform is not designed to collect personally identifiable information (PII) or handle sensitive data.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2">Account Information</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Region and constituency information</li>
                  <li>Account credentials (securely encrypted)</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2">Platform Activity</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Proposals you submit</li>
                  <li>Votes you cast</li>
                  <li>Comments and interactions</li>
                  <li>Representatives you follow</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2">Technical Information</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage analytics and performance data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To facilitate your participation in governance processes</li>
                <li>To display your proposals and votes publicly (in line with transparency goals)</li>
                <li>To notify you about proposal updates and voting deadlines</li>
                <li>To improve platform functionality and user experience</li>
                <li>To ensure security and prevent fraud or abuse</li>
                <li>To comply with legal obligations and government regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Public Information & Transparency
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Wananchi Voice is a public participation platform. The following information is publicly visible:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>All submitted proposals (with your name as submitter)</li>
                <li>Your votes on proposals (YES/NO)</li>
                <li>Public comments you make on proposals</li>
                <li>Your voting history and participation statistics</li>
              </ul>
              <p className="text-gray-700 mt-3">
                You can choose to make comments anonymously, but votes on proposals are recorded publicly to ensure transparency and accountability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Under the Kenya Data Protection Act, 2019, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
                <li><strong>Complaint:</strong> Lodge a complaint with the Office of the Data Protection Commissioner</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-3">
                <li>Encrypted data transmission (HTTPS/TLS)</li>
                <li>Secure password hashing and authentication</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and role-based permissions</li>
                <li>Regular data backups and disaster recovery plans</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We retain your data for as long as your account is active or as needed to provide services. Voting records and proposal data are retained permanently for transparency and historical record-keeping purposes. You may delete your account at any time, but public proposals and votes will remain visible as part of the public record.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                For questions about this Privacy Policy or to exercise your data rights, contact us at:
              </p>
              <div className="space-y-1 text-gray-700">
                <p><strong>Email:</strong> privacy@wananchivoice.go.ke</p>
                <p><strong>Phone:</strong> +254 700 000 000</p>
                <p><strong>Address:</strong> Parliament Road, Nairobi, Kenya</p>
              </div>
              <p className="text-gray-700 mt-4">
                <strong>Data Protection Officer:</strong> dpo@wananchivoice.go.ke
              </p>
            </CardContent>
          </Card>

          <Card className="border-kenya-green">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">
                By using Wananchi Voice, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
