import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Accessibility, Eye, Keyboard, HelpCircle } from 'lucide-react';

export function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="flex items-center gap-3 mb-4">
            <Accessibility className="h-8 w-8 text-kenya-green" />
            Accessibility Statement
          </h1>
          <p className="text-gray-600">
            Last updated: November 12, 2025
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Accessibility className="h-5 w-5 text-kenya-green" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Wananchi Voice is dedicated to ensuring digital accessibility for all Kenyan citizens, regardless of physical ability or device constraint. We are committed to making our platform inclusive and usable for everyone in our diverse democracy.
              </p>
              <p>
                We continuously improve the user experience and apply the relevant accessibility standards to align with best practices and WCAG 2.1 Level AA guidelines.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-kenya-green" />
                Visual Settings & Assistive Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Our platform includes built-in controls accessible under the <strong>Settings</strong> page to let you customize your interface:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Text Resizing:</strong> Dynamically increase the font scale (Small, Normal, Large, Extra Large) directly within settings.
                </li>
                <li>
                  <strong>High Contrast Mode:</strong> Enhance visual boundaries and contrast to support citizens with low vision or color blindness.
                </li>
                <li>
                  <strong>Reduced Motion:</strong> Disable non-essential animations and transitions for users experiencing motion sensitivity or utilizing screen reader equipment.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-kenya-green" />
                Keyboard Navigation Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                You can browse the entire site using only a keyboard. The basic commands are:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Navigation Shortcuts</h4>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    <li>• <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Tab</kbd> : Forward focus</li>
                    <li>• <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Tab</kbd> : Backward focus</li>
                    <li>• <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Enter</kbd> / <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Spacebar</kbd> : Activate selected button/link</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Interactive Widgets</h4>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    <li>• <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Arrow Keys</kbd> : Navigate dropdown options or tabs</li>
                    <li>• <kbd className="px-1.5 py-0.5 bg-gray-200 border rounded font-mono text-xs">Escape</kbd> : Close panels, dialogues, and popup menus</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-kenya-green" />
                Feedback & Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p>
                We welcome your feedback on the accessibility of Wananchi Voice. If you encounter accessibility barriers, please let us know so we can work on fixing them:
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p><strong>Email:</strong> accessibility@wananchivoice.go.ke</p>
                <p><strong>Phone:</strong> +254 700 000 000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
