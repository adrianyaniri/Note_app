const indexCTRL = {};

indexCTRL.renderIndex = (req,res) =>{
    res.render('index');
};
indexCTRL.renderAbout = (req,res) =>{
    res.render('about');
};


module.exports = indexCTRL;