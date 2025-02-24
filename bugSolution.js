```javascript
db.collection.updateOne({"_id":1}, {"$inc":{"nested.field":1}, "$setOnInsert":{"nested":{"field":0}}});
```