---
id: overview
title: Overview
slug: /rhetos/overview
---

Package: `@ngx-floyd/rhetos`

Library used for easier integration with [`Rhetos`](https://github.com/Rhetos), DSL
framework that enables you to create your own domain-specific language to build server
applications.

It implements several services for data access and metadata utilizing
`Rhetos.FloydExtensions`, a DSL plugin module that includes typescript model generator and rest endpoint for
fetching model metadata.

Example of a generated model

```typescript title="rhetos-model.ts"
export namespace Common {
  ...
  export const PrincipalInfo = createStructureInfo<Common.Principal>('Common/Principal');
  export interface Principal {
    ID: string;
    Name: string;
    Active?: boolean;
  }
  ...
}
```
Example of generated metadata
```typescript
{ 
    key: "Common/Principal", 
    serviceType: "Entity", 
    properties: { 
        Name: { 
            type: "ShortString", 
            required: true 
        },
        Active: {
            type: 'Bool'
        }     
    },
    navigationalProperties: {} 
} 
```

Query example
```ts title="app.component.ts"
...
private principalService: EntityService<Common.Principal>;

constructor(private rhetosRest: RhetosRest) {
  this.principalService = this.rhetosRest.forEntity(Common.PrincipalInfo);
}

ngOnInit() {
  this.principalService.recordsWithCount((query) =>
    query
      .skip(10)
      .take(20)
      .orderBy('Name')
      .filterBy(Common.SmartSearchInfo, { Pattern: 'test' })
      .where('Active', 'Equals', true)
  ).subscribe(res => console.log(res));
}


...
```
