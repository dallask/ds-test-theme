import React from 'react'

import bPlatePage from './boilerplate-style-guide.twig'
import examplePageDs1 from './example-page.twig'

export default {
  title: 'Pages/DS1',
}

export const boilerplateStyleGuide = () => (
  <div dangerouslySetInnerHTML={{ __html: bPlatePage() }}/>
)

export const examplePage = () => (
  <div dangerouslySetInnerHTML={{ __html: examplePageDs1() }}/>
)
