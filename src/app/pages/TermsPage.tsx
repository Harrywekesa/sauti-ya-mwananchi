import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

export function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-4">
            <Scale className="h-8 w-8 text-kenya-green" />
            Terms of Use
          </h1>
          <p className="text-gray-600">
            Last updated: November 12, 2025
          </p>
        </div>

        <Alert className="mb-8">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Please read these Terms of Use carefully before using Wananchi Voice. By accessing or using this platform, you agree to be bound by these terms.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Wananchi Voice is a public participation platform operated by the Government of Kenya. By creating an account and using this platform, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-3">
                <li>Comply with these Terms of Use and all applicable laws</li>
                <li>Provide accurate and truthful information</li>
                <li>Be at least 18 years old or have parental/guardian consent</li>
                <li>Be a Kenyan citizen or resident</li>
                <li>Use the platform responsibly and respectfully</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Acceptable Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                You agree to use Wananchi Voice only for lawful purposes. You may:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Submit proposals related to governance and policy</li>
                <li>Vote on proposals that affect your community</li>
                <li>Engage in constructive discussions and debates</li>
                <li>Follow representatives and track their work</li>
                <li>Access public transparency data and reports</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-kenya-red" />
                Prohibited Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>False Information:</strong> Submitting proposals with deliberately false or misleading content</li>
                <li><strong>Harassment:</strong> Threatening, abusive, or discriminatory behavior toward other users or representatives</li>
                <li><strong>Spam:</strong> Submitting duplicate, irrelevant, or frivolous proposals</li>
                <li><strong>Vote Manipulation:</strong> Creating fake accounts or attempting to artificially inflate vote counts</li>
                <li><strong>Hate Speech:</strong> Content that promotes violence or hatred based on race, ethnicity, religion, gender, or other protected characteristics</li>
                <li><strong>Illegal Activity:</strong> Promoting or facilitating any illegal activities</li>
                <li><strong>System Abuse:</strong> Attempting to hack, disrupt, or overwhelm the platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Ownership & Licensing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Your Content:</strong> You retain ownership of proposals, comments, and other content you submit. However, by submitting content to Wananchi Voice, you grant the Government of Kenya a perpetual, irrevocable, worldwide, royalty-free license to use, display, and distribute your content for governance purposes.
                </p>
                <p>
                  <strong>Public Domain:</strong> All proposals and votes are considered public information and may be shared, analyzed, or referenced by government bodies, media, researchers, and the general public.
                </p>
                <p>
                  <strong>Platform Content:</strong> The Wananchi Voice platform, including its design, features, and functionality, is owned by the Government of Kenya and protected by intellectual property laws.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Voting & Proposal Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2">Proposal Submission</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Proposals must be clear, constructive, and related to governance</li>
                    <li>Each proposal will be reviewed before being made public</li>
                    <li>Proposals that meet criteria will be assigned to appropriate representatives</li>
                    <li>You may be asked to clarify or provide additional information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Voting</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Each user can vote once per proposal (YES or NO)</li>
                    <li>Votes are recorded publicly for transparency</li>
                    <li>You cannot change your vote once submitted</li>
                    <li>Voting records are permanent and cannot be deleted</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Moderation & Enforcement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Review and remove content that violates these terms</li>
                <li>Suspend or terminate accounts that engage in prohibited conduct</li>
                <li>Edit or categorize proposals for clarity</li>
                <li>Block users who repeatedly violate platform rules</li>
                <li>Report illegal activity to law enforcement</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Users may appeal moderation decisions by contacting support@wananchivoice.go.ke
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer & Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>No Guarantee of Outcomes:</strong> While Wananchi Voice aims to facilitate citizen participation in governance, we cannot guarantee that any proposal will be implemented or that votes will directly determine policy outcomes.
                </p>
                <p>
                  <strong>Platform Availability:</strong> We strive to maintain platform availability but do not guarantee uninterrupted service. We may suspend access for maintenance or technical issues.
                </p>
                <p>
                  <strong>Third-Party Content:</strong> We are not responsible for the accuracy or legality of user-submitted content. Views expressed by users do not represent the Government of Kenya.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may update these Terms of Use from time to time. Material changes will be communicated via email or platform notification. Continued use of the platform after changes constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                These Terms of Use are governed by the laws of the Republic of Kenya. Any disputes arising from use of this platform shall be resolved in Kenyan courts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact & Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                For questions about these terms or platform issues:
              </p>
              <div className="space-y-1 text-gray-700">
                <p><strong>Email:</strong> support@wananchivoice.go.ke</p>
                <p><strong>Phone:</strong> +254 700 000 000</p>
                <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-kenya-green">
            <CardContent className="pt-6">
              <p className="text-sm text-gray-600">
                By using Wananchi Voice, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
