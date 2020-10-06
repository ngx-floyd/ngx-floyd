---
id: rhetos-rest
title: RhetosRest
slug: /rhetos/architecture/rhetos-rest
---

`RhetosRest` is a factory service for creating structure rest services.  
  
It implements services for most commonly used Rhetos concepts. Additionally, it can be extended with your custom service implementations when needed.

Every method takes a `StructureInfo` as an argument and returns a rest service of a chosen type.


## API

### `forAction()`
Returns [ActionService](../rest-services/action):

```ts
this.rhetosRest.forAction(Module.ActionInfo);
````

### `forQueryable()`
Returns [QueryableService](../rest-services/queryable):

```ts
this.rhetosRest.forQueryable(Module.QueryableInfo);
````


### `forEntity()`
Returns [EntityService](../rest-services/entity):

```ts
this.rhetosRest.forEntity(Module.ActionInfo);
````


### `forFunction()`
Returns [FunctionService](../rest-services/function):

```ts
this.rhetosRest.forFunction(Module.FunctionInfo);
````


### `forComplex()`
Returns [ComplexService](../rest-services/complex):

```ts
this.rhetosRest.forComplex(Module.ComplexInfo);
````


### `forTemplaterReport()`
Returns [TemplaterReportService](../rest-services/templater-report):

```ts
this.rhetosRest.forTemplaterReport(Module.TemplaterReportInfo);
````
