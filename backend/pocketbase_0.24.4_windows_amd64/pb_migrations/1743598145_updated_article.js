/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number3045600734",
    "max": null,
    "min": null,
    "name": "prix_article_groupe",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number2349388460",
    "max": null,
    "min": null,
    "name": "prix_article_unite",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2473161100")

  // remove field
  collection.fields.removeById("number3045600734")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number2349388460",
    "max": null,
    "min": null,
    "name": "prix_article",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
