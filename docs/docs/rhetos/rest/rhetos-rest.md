---
id: rhetos-rest
title: RhetosRest
slug: /rhetos/rest/rhetos-rest
---

`RhetosRest` is a factory service for creating structure rest services.

Every method takes a `StructureInfo` for an argument.

:::note
There is no need to specify the type of model explicitly since it will be inferred from `StructureInfo`.
:::

## API

### `forAction()`
Create ActionService:

```ts
this.rhetosRest.forAction(Module.ActionInfo);
````

### `forQueryable()`
Create QueryableService:

```ts
this.rhetosRest.forQueryable(Module.QueryableInfo);
````


### `forEntity()`
Create EntityService:

```ts
this.rhetosRest.forEntity(Module.ActionInfo);
````


### `forFunction()`
Create FunctionService:

```ts
this.rhetosRest.forFunction(Module.FunctionInfo);
````


### `forComplex()`
Create ComplexService:

```ts
this.rhetosRest.forComplex(Module.ComplexInfo);
````


### `forTemplaterReport()`
Create TemplaterReportService:

```ts
this.rhetosRest.forTemplaterReport(Module.TemplaterReportInfo);
````
