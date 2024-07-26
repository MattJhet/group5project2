const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
});

router.get('/login', async (req, res) => {
    res.render('login')
});

router.get('/signup', async (req, res) => {
    res.render('signUp')
});

router.get('/map', (req, res) => {
    res.render('map')
})


module.exports = router;
