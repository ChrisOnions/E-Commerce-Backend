const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((findalltags, err) => {
    if (err) throw err
    res.json(findalltags);
  })
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {

  Tag.findOne(
    {
      where: {
        id: req.params.id
      },
    }
  ).then((idData) => {
    res.json(idData)
  })
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
