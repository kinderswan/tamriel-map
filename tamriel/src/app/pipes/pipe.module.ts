import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EscapeHtmlPipe } from './keep-html.pipe';

@NgModule({
	declarations: [EscapeHtmlPipe],
	imports: [ CommonModule ],
	exports: [EscapeHtmlPipe],
	providers: [],
})
export class PipeModule {}
