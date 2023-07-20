import { style, trigger, transition, animate, AnimationTriggerMetadata, state } from '@angular/animations';

export const appear: AnimationTriggerMetadata =
 trigger('appear', [
    state(
      'void', style({
        opacity: 0
      })
    ),
    transition(':enter', [
      animate('{{duration}}s', style({
        opacity: 1
      }))
    ], { params: { duration: 1 } })
  ])

