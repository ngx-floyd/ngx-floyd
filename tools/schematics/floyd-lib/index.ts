import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'library', {
      name: schema.name,
      prefix: 'flo',
      style: 'less',
      publishable: true,
      buildable: true,
      strict: true,
      importPath: `@ngx-floyd/${schema.name}`
    }),
  ]);
}
