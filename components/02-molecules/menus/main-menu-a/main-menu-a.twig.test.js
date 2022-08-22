import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { namespaces, setupTwig } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('main-menu-a', () => {
  it('can render an main menu a', async () => {
    const { container } = await render(
      join(__dirname, 'main-menu-a.twig'),
      loadYaml(join(__dirname, 'main-menu-a.yml')),
      namespaces,
    );

    expect(container).toMatchSnapshot();
  });
});
