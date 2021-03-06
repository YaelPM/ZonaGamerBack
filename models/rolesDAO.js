const bd = require('../configMysql')

module.exports = {
    insertRol : (rol, callback) => {
        let sql = 'INSERT INTO roles SET ?'
        console.log(rol);
        bd.query(sql, rol, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },
    deleteRol : (id, callback) => {
        let sql = 'DELETE FROM roles WHERE idRol = ?'
        bd.query(sql, id, (err, data) => {
            console.log(err);
            if (err)

                return callback(null)
            else
                return callback(data)
        })
    },
    getAllRoles : (callback) => {
        let sql = 'SELECT * FROM roles'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    }
}
