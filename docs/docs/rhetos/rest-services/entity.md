---
id: entity
title: Entity
slug: /rhetos/rest-services/entity
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
Insert a new entity, returns an Observable.

Since we are generating our models with a required ID field. Here are a few ways you can create a new model.

```ts
const newPrincipal: Common.Principal = {
  ID: newGuid(),
  Name: 'John',
};

const newPrincipal2 = createEntity(Common.PrincipalInfo, { Name: 'John' });

entityService.insert(newPrincipal);
entityService.insert(newPrincipal2);
entityService.insert({ Name: 'John' });
````
:::note
***newGuid()*** is a utility function from `@ngx-floyd/core`  
***createEntity()*** is a utility function from `@ngx-floyd/rhetos`
:::

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
