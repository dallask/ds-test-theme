import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import { namespaces, setupTwig } from '../../.storybook/setupTwig';

setupTwig(Twig);

describe('with-sidebar', () => {
  it('can render a template with a sidebar', async () => {
    const { container } = await render(
      join(__dirname, 'with-sidebar.twig'),
      {},
      namespaces,
    );

    expect(container).toMatchSnapshot();
  });
});
