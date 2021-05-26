const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categorie
  const findCategory = await Category.findAll({
    include: [{ model: Product }],
  })
  return res.status(200).json(findCategory)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const findCategoryid = await Category.findByPk(req.params.id, {
      includes: [{ model: Category }, { model: Product }],
    })
    if (findCategoryid) {
      return res.status(200).json(findCategoryid)
    }
  } catch (err) {
    console.log(err)
  }// be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const NewCategory = await Category.create(req.body);
    res.status(200).json(NewCategory);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    console.log("object");
    const updateCategory = await Category.update(
      {
        category_name: req.params.category_name,
      },
      {
        where: {
          id: req.params.id,
        }
      }
    )
    res.json(updateCategory)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json(delCategory)
  } catch (err) {
    res.status(404).json(err)
  }
});

module.exports = router;
