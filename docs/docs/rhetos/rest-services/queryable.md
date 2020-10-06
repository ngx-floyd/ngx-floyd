---
id: queryable
title: Queryable
slug: /rhetos/rest-services/queryable
---
:::info
`QueryableService` is used for data structures that have queryable data. ***RhetosConcepts***: Browse, SqlQueryable...
:::

## Usage
```ts
queryableService = this.rhetosRest.forQueryable(Common.PrincipalInfo);
````




## API

### `single()`
Fetch a single record by ***ID***:

```ts
queryableService.single('91E1BE81-5EE7-43E1-9D39-5E676E9DC4C0');
````

### `all()`
Fetch all records:

```ts
queryableService.all();
```

### `records()`
Query for records:

```ts
queryableService.records();
queryableService.records(query => query.take(10).skip(20));
```

### `count()`
Query for total count:

```ts
queryableService.count();
queryableService.count(query => query.where('Active', 'Equals', true));
```

### `recordsWithCount()`
Query for record and total count:

```ts
queryableService.recordsWithCount(query => query.orderBy('Name'));
```


## RhetosQueryFn
`records()`, `count()` and `recordsWithCount()` methods take an optional `RhetosQueryFn` argument  which can be used like this.

```ts
this.principalService.recordsWithCount((query) =>
  query
    .take(10)
    .skip(20)
    .orderBy('Name')
    .filterBy(Common.SmartSearchInfo, { Pattern: 'test' })
    .where('Active', 'Equals', true)
);
```
:::note
***filterBy()*** - Used for predefined filters, takes a filter parameter ```StructureInfo``` as an argument and an optional value depending on the filter type.  
***where()*** - Used for generic property filters, takes a property, operation and value arguments.
:::

