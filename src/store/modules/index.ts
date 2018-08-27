// Register each file as a corresponding Vuex module. Module nesting
// will mirror [sub-]directory hierarchy and modules are namespaced
// as the camelCase equivalent of their file name.

import camelCase from 'lodash/camelCase'

const requireModule: any = require.context('.', true, /^((?!\.unit\.).)*\.ts$/)
const root = { modules: {} }

requireModule.keys().forEach((fileName: any) => {
  // Skip this file, as it's not a module
  if (fileName === './index.ts') return

  // Get the module path as an array
  const modulePath = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split(/\//)
    .map(camelCase)

  // Get the modules object for the current path
  const { modules } = getNamespace(root, modulePath)

  // Add the module to our modules object
  modules[modulePath.pop()] = {
    // Modules are namespaced by default
    namespaced: true,
    ...requireModule(fileName),
  }

  // Recursively get the namespace of the module, even if nested
  // @ts-ignore
  function getNamespace(subtree, path) {
    if (path.length === 1) return subtree

    const namespace = path.shift()
    subtree.modules[namespace] = {
      modules: {},
      ...subtree.modules[namespace],
    }
    return getNamespace(subtree.modules[namespace], path)
  }
})

export default root.modules
