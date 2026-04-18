import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  constructor(@Inject(DOCUMENT) private doc: Document) {}

  inject(id: string, schema: object): void {
    this.remove(id);
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = `schema-${id}`;
    script.text = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }

  remove(id: string): void {
    this.doc.getElementById(`schema-${id}`)?.remove();
  }
}
