/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPlayer: function(req, res) {
        var id = req.param('id');
        if(!id) return res.badRequest('No ID');
        if (!req.isSocket) return res.badRequest('No Socket');
        sails.sockets.join(req, 'player');
        sails.sockets.blast('hello', {id: id});
    }
};
