import { Component } from '@angular/core';
import { HlmButtonDirective } from '@ng-spartan/ui/button/helm';
import { HlmSpinnerComponent } from '@ng-spartan/ui/spinner/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixEnvelopeClosed } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-button-with-icon',
  standalone: true,
  imports: [HlmButtonDirective, HlmSpinnerComponent, HlmIconComponent],
  providers: [provideIcons({ radixEnvelopeClosed })],
  template: `
    <button hlmBtn>
      <hlm-icon size="sm" class="mr-2" name="radixEnvelopeClosed" />
      Login with Email
    </button>
  `,
})
export class ButtonWithIconComponent {}

export const withIconCode = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@ng-spartan/ui/button/helm';
import { HlmSpinnerComponent } from '@ng-spartan/ui/spinner/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixEnvelopeClosed } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-button-with-icon',
  standalone: true,
  imports: [HlmButtonDirective, HlmSpinnerComponent, HlmIconComponent],
  providers: [provideIcons({ radixEnvelopeClosed })],
  template: \`
    <button hlmBtn>
      <hlm-icon size="sm" class="mr-2" name="radixEnvelopeClosed" />
      Login with Email
    </button>
  \`,
})
export class ButtonWithIconComponent {}
`;