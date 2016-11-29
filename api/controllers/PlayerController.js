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
    },
	create: function(req, res, next){
		Player.create(req.params.all(), function (err, player) {
				if (err) {
						return res.serverError(err);
				}
				return res.jsonx(player);
		});
	},
	getUsername: function(req, res){
		Player.get(req.body).exec(function (err, player) {
				if (err) {
						return res.serverError(err);
				}
				return res.jsonx(player);
		});
	},

	// sign_up: function (req, res){
	// 		res.view('player/sign_up');
	// }
};
