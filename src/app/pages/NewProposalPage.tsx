import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, Upload, FileText, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

const categories = [
  'Healthcare',
  'Education',
  'Infrastructure',
  'Energy & Environment',
  'Agriculture',
  'Security',
  'Technology & Innovation',
  'Youth & Sports',
  'Women & Gender',
  'Economic Development',
];

const ministries = [
  'Ministry of Health',
  'Ministry of Education',
  'Ministry of Transport',
  'Ministry of ICT',
  'Ministry of Water',
  'Ministry of Energy',
  'Ministry of Agriculture',
  'Ministry of Interior',
  'Ministry of Finance',
  'Ministry of Trade',
];

const counties = [
  'Nationwide',
  'Nairobi',
  'Mombasa',
  'Kisumu',
  'Nakuru',
  'Uasin Gishu',
  'Machakos',
  'Kiambu',
  'Kakamega',
  'Meru',
  // Add all 47 counties in production
];

export function NewProposalPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    ministry: '',
    region: '',
    constituency: '',
    ward: '',
  });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.ministry) newErrors.ministry = 'Ministry is required';
    if (!formData.region) newErrors.region = 'Region is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // In real app, submit to backend
    console.log('Submitting proposal:', formData, attachments);
    navigate('/proposals');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/proposals" className="inline-flex items-center gap-2 text-kenya-green hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Proposals
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Submit a New Proposal</CardTitle>
          <CardDescription>
            Share your ideas for improving Kenya. Your proposal will be reviewed and assigned to the appropriate representative.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                All proposals are public and will be reviewed before being assigned to a representative.
                Please ensure your proposal is constructive and follows community guidelines.
              </AlertDescription>
            </Alert>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">
                Proposal Title <span className="text-kenya-red">*</span>
              </Label>
              <Input
                id="title"
                placeholder="e.g., Improve Healthcare Access in Rural Areas"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={errors.title ? 'border-kenya-red' : ''}
              />
              {errors.title && <p className="text-sm text-kenya-red">{errors.title}</p>}
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">
                Category <span className="text-kenya-red">*</span>
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger className={errors.category ? 'border-kenya-red' : ''}>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-sm text-kenya-red">{errors.category}</p>}
            </div>

            {/* Ministry */}
            <div className="space-y-2">
              <Label htmlFor="ministry">
                Related Ministry <span className="text-kenya-red">*</span>
              </Label>
              <Select
                value={formData.ministry}
                onValueChange={(value) => setFormData({ ...formData, ministry: value })}
              >
                <SelectTrigger className={errors.ministry ? 'border-kenya-red' : ''}>
                  <SelectValue placeholder="Select ministry" />
                </SelectTrigger>
                <SelectContent>
                  {ministries.map((ministry) => (
                    <SelectItem key={ministry} value={ministry}>
                      {ministry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.ministry && <p className="text-sm text-kenya-red">{errors.ministry}</p>}
            </div>

            {/* Region Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="region">
                  County/Region <span className="text-kenya-red">*</span>
                </Label>
                <Select
                  value={formData.region}
                  onValueChange={(value) => setFormData({ ...formData, region: value })}
                >
                  <SelectTrigger className={errors.region ? 'border-kenya-red' : ''}>
                    <SelectValue placeholder="Select county" />
                  </SelectTrigger>
                  <SelectContent>
                    {counties.map((county) => (
                      <SelectItem key={county} value={county}>
                        {county}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.region && <p className="text-sm text-kenya-red">{errors.region}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="constituency">Constituency (Optional)</Label>
                <Input
                  id="constituency"
                  placeholder="e.g., Westlands"
                  value={formData.constituency}
                  onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ward">Ward (Optional)</Label>
                <Input
                  id="ward"
                  placeholder="e.g., Parklands"
                  value={formData.ward}
                  onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">
                Detailed Description <span className="text-kenya-red">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your proposal in detail. Include the problem, your solution, expected benefits, and implementation suggestions..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={8}
                className={errors.description ? 'border-kenya-red' : ''}
              />
              {errors.description && <p className="text-sm text-kenya-red">{errors.description}</p>}
              <p className="text-sm text-gray-600">
                Minimum 100 characters. Be clear and specific about your proposal.
              </p>
            </div>

            {/* File Attachments */}
            <div className="space-y-2">
              <Label htmlFor="attachments">Supporting Documents (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-kenya-green transition-colors">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload supporting documents (PDF, DOC, images)
                </p>
                <Input
                  id="attachments"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="max-w-xs mx-auto"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>
              {attachments.length > 0 && (
                <div className="space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="h-4 w-4" />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Privacy Notice */}
            <Alert>
              <AlertDescription className="text-sm">
                By submitting this proposal, you agree to our{' '}
                <Link to="/terms" className="text-kenya-green hover:underline">
                  Terms of Use
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-kenya-green hover:underline">
                  Privacy Policy
                </Link>
                . Your name will be publicly associated with this proposal.
              </AlertDescription>
            </Alert>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/proposals')}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-kenya-green hover:bg-kenya-green-dark">
                Submit Proposal
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
