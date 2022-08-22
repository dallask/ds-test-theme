import { join } from 'path';
import { render, Twig } from 'twig-testing-library';

import loadYaml from '../../../../util/loadYaml';
import { namespaces, setupTwig } from '../../../../.storybook/setupTwig';

setupTwig(Twig);

describe('full-pi-menu', () => {
  it('can render an full pi menu', async () => {
    const { container } = await render(
      join(__dirname, 'full-pi-menu.twig'),
      loadYaml(join(__dirname, 'full-pi-menu.yml')),
      namespaces,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <ul class="full-pi-menu">
          <li class="full-pi-menu__item">
            <a class="full-pi-menu__link" href="#">Medication guide</a>
          </li>
          <li class="full-pi-menu__item">
            <a class="full-pi-menu__link" href="#">U.S. Healthcare Professionals Site</a>
          </li>
        </ul>
      </div>
    `);
  });
});
