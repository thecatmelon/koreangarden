import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"


ExternalPlugin.Explorer({
  filterFn: (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["anki"])
 
    // can also use node.slug or by anything on node.data
    // note that node.data is only present for files that exist on disk
    // (e.g. implicit folder nodes that have no associated index.md)
    return !omit.has(node.displayName.toLowerCase())
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

