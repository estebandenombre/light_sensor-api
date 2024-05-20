import { Router } from 'express'
import { getLightSensorValues, getLightSensorValue, createLightSensorValue, updateLightSensorValue, deleteLightSensorValue } from '../controllers/light_sensor.controller.js'
const router = Router()

router.get('/light_sensor_values', getLightSensorValues)

router.get('/light_sensor_value/:id', getLightSensorValue)

router.post('/light_sensor_value', createLightSensorValue)

router.put('/light_sensor_value/:id', updateLightSensorValue)

router.delete('/light_sensor_value/:id', deleteLightSensorValue)

export default router