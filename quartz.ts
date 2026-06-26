import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"


ExternalPlugin.Explorer({
  filterFn: (node) => {
    // set containing names of everything you want to filter out
    const omit = new Set(["anki", "resource", "templates"])
 
    // can also use node.slug or by anything on node.data
    // note that node.data is only present for files that exist on disk
    // (e.g. implicit folder nodes that have no associated index.md)
    return !omit.has(node.displayName.toLowerCase())
  },
  //it still alphabetizes based on emoji so no real reason to have this instead of doing it in obsidian
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
    if (node.displayName == "Misc") {
      node.displayName = "🗄️ " + node.displayName
    }

    else {
      node.displayName = node.displayName
    }
  },
  sortFn: (a, b) => {
    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
