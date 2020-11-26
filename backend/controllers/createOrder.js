

 const handleCreateOrder = (req, res, db) => {
    const { toPrice } = req.body;
    res.json({toPrice}); 
 }

 module.exports = {
    handleCreateOrder: handleCreateOrder
 };