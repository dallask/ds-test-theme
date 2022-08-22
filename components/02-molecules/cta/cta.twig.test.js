import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../util/loadYaml';
import { namespaces, setupTwig } from '../../../.storybook/setupTwig';

setupTwig(Twig);

describe('cta', () => {
  it('can render a cta', async () => {
    const { container } = await render(
      join(__dirname, 'cta.twig'),
      loadYaml(join(__dirname, 'cta.yml')),
      namespaces,
    );

    expect(container).toMatchSnapshot();
  });
});
