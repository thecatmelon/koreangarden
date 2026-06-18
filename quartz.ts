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
  sortFn: (a, b) => {
    return a.displayName.localeCompare(b.displayName)
  },
  mapFn: (node) => {
    if (node.displayName == "Anki Cards") {
      node.displayName = "🃏 " + node.displayName
    }
    if (node.displayName == "Resources") {
      node.displayName = "🌐 " + node.displayName
    }
    if (node.displayName == "Notes") {
      node.displayName = "📝 " + node.displayName
    }
    else {
      node.displayName = node.displayName
    }
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

