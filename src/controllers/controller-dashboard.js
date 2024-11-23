// Controller untuk Dashboard
exports.getDashboard = (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
};
