import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Accessibility, Type, Contrast, Eye } from 'lucide-react';

export function AccessibilityPanel() {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply font size
    const sizes: Record<string, string> = {
      small: '14px',
      normal: '16px',
      large: '18px',
      'extra-large': '20px',
    };
    document.documentElement.style.fontSize = sizes[fontSize];

    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0s');
    } else {
      document.documentElement.style.removeProperty('--animation-duration');
    }
  }, [fontSize, highContrast, reducedMotion]);

  const resetSettings = () => {
    setFontSize('normal');
    setHighContrast(false);
    setReducedMotion(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Accessibility className="h-5 w-5" />
          Accessibility Settings
        </CardTitle>
        <CardDescription>
          Customize your viewing experience for better accessibility
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Font Size */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Type className="h-4 w-4" />
            <Label>Text Size</Label>
          </div>
          <Select value={fontSize} onValueChange={setFontSize}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="normal">Normal (Default)</SelectItem>
              <SelectItem value="large">Large</SelectItem>
              <SelectItem value="extra-large">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* High Contrast */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Contrast className="h-4 w-4" />
            <div>
              <Label htmlFor="high-contrast">High Contrast Mode</Label>
              <p className="text-sm text-gray-600">Increase color contrast for better visibility</p>
            </div>
          </div>
          <Switch
            id="high-contrast"
            checked={highContrast}
            onCheckedChange={setHighContrast}
          />
        </div>

        {/* Reduced Motion */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <div>
              <Label htmlFor="reduced-motion">Reduce Motion</Label>
              <p className="text-sm text-gray-600">Minimize animations and transitions</p>
            </div>
          </div>
          <Switch
            id="reduced-motion"
            checked={reducedMotion}
            onCheckedChange={setReducedMotion}
          />
        </div>

        {/* Keyboard Navigation Info */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="mb-2 flex items-center gap-2">
            <span>⌨️</span> Keyboard Navigation
          </h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Tab: Navigate between elements</li>
            <li>• Enter/Space: Activate buttons and links</li>
            <li>• Escape: Close dialogs and menus</li>
            <li>• Arrow keys: Navigate through lists</li>
          </ul>
        </div>

        {/* Reset Button */}
        <Button variant="outline" onClick={resetSettings} className="w-full">
          Reset to Default
        </Button>
      </CardContent>
    </Card>
  );
}
