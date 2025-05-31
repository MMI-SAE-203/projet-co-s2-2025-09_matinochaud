/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool750439983",
    "name": "disponibilite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // remove field
  collection.fields.removeById("bool750439983")

  return app.save(collection)
})
