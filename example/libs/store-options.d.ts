declare module mqtt{
  interface IStoreOptions {
  /**
   * true, clear _inflights at close
   */
  clean?: boolean
}
}