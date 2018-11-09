export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Skeleton/Card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-skeleton-card" */ 'src/components/Skeleton/Card.mdx'),
  'src/components/Skeleton/Paragraph.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-skeleton-paragraph" */ 'src/components/Skeleton/Paragraph.mdx'),
  'src/components/Skeleton/Shape.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-skeleton-shape" */ 'src/components/Skeleton/Shape.mdx'),
}
