---
id: action
title: Action
slug: /rhetos/rest-services/action
---
***Rhetos Concept*** : Action

## Usage

```ts
this.actionService = this.rhetosRest.forAction(Adresar.QuickInsertNaseljeInfo);
````
Or by extending `ActionService`.


## API

### `execute()`
Execute Rhetos action:

```ts
actionService.execute({NazivMjesta: 'Mjesto', PostanskiBroj: '123'});
````

