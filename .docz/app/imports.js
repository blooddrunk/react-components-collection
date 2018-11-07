export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/Skeleton/Word.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-skeleton-word" */ 'src/components/Skeleton/Word.mdx'),
}
