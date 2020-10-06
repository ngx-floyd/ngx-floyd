---
id: structure-info
title: StructureInfo
slug: /rhetos/rest/structure-info
---

`StructureInfo` is a constant value that represents ***Rhetos*** data structures. It is used by services to
identify which data structure we are using.

StructureInfo's are generated with ***Rhetos.FloydExtensions*** plugin alongside interfaces(models) for every data structure in our Rhetos application.

#### Example: 
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

:::info
Additional benefit of using `StructureInfo` constants is that we don't need to specify generic type of our model because of Typescript's type inference.

For example, instead of writing something like this:
```ts
this.rhetosRest.forEntity<Common.Principal>('Common/Principal')
```

we can just write it like this:
```ts
this.rhetosRest.forEntity(Common.PrincipalInfo)
```

and still get all the benefits like we declared the type specifically.
:::
