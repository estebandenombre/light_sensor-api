import { pool } from "../db.js"

export const getLightSensorValues = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM light_sensor_readings ')
        res.json(rows)
    } catch (error) {
        return res.status(500)
    }

}

export const getLightSensorValue = async (req, res) => {

    try {
        const [rows] = await pool.query('SELECT * FROM light_sensor_readings WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length <= 0) return res.status(404).json({
            message: 'not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500)
    }

}


export const createLightSensorValue = async (req, res) => {
    try {
        const { id, light_value } = req.body
        const [rows] = await pool.query('INSERT INTO light_sensor_readings (id, light_value) VALUES (?,?)', [id, light_value])
        res.send({
            id,
            light_value,
        })
    } catch (error) {
        return res.status(500)
    }

}


export const deleteLightSensorValue = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM light_sensor_readings WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500)
    }

}

export const updateLightSensorValue = async (req, res) => {
    try {
        const { id } = req.params
        const { light_value } = req.body

        const [result] = await pool.query('UPDATE light_sensor_readings SET light_value = ? WHERE id = ?', [light_value, id])

        if (result.affectedRows == 0) return res.status(404).json({
            message: 'not found'
        })
        res.json('received')
    } catch (error) {
        return res.status(500)
    }




}