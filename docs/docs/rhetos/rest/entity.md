---
id: entity
title: Entity
slug: /rhetos/rest/entity
---


***Rhetos Concept*** : Entity

Extends `QueryableService`.

## Usage

```ts
entityService = this.rhetosRest.forEntity(Common.PrincipalInfo);
````
Or by extending `EntityService`.


## API

All `QueryableService` methods plus:

### `insert()`
Insert a new entity:

```ts
entityService.insert({Name: 'Name'});
````


### `update()`
Update entity:

```ts
entityService.update({ID: '9F594B2D-3C6C-49E9-94A6-06130DE5C026', Name: 'NewName'});
````


### `delete()`
Delete entity:

```ts
entityService.delete('9F594B2D-3C6C-49E9-94A6-06130DE5C026');
````
