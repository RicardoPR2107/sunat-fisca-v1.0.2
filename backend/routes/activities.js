const express = require('express');
const router = express.Router();
const { DynamoDBClient, PutItemCommand, QueryCommand, DeleteItemCommand, UpdateItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');
const { body, validationResult } = require('express-validator');

// Configurar AWS
const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

// Middleware de validación
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: errors.array()[0].msg
        });
    }
    next();
};

// Endpoint para obtener actividades por userId
router.get('/', async (req, res) => {
    try {
        const { userId } = req.query;
        
        const params = new QueryCommand({
            TableName: 'Activities',
            IndexName: 'UserIdIndex',
            KeyConditionExpression: '#userId = :userId',
            ExpressionAttributeNames: {
                '#userId': 'userId'
            },
            ExpressionAttributeValues: {
                ':userId': { S: userId }
            },
            ScanIndexForward: false // Orden descendente por fecha
        });

        const result = await client.send(params);
        const activities = result.Items.map(item => unmarshall(item));
        res.status(200).json(activities);
    } catch (error) {
        console.error('Error al obtener actividades:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

// Endpoint para crear una nueva actividad
router.post('/', [
    body('activityType').trim().notEmpty().withMessage('El tipo de actividad es requerido'),
    body('description').trim().notEmpty().withMessage('La descripción es requerida'),
    body('executionDate').trim().notEmpty().withMessage('La fecha de ejecución es requerida')
], validate, async (req, res) => {
    try {
        const { userId, supervisorId, activityType, description, executionDate, registrationDate, area } = req.body;
        const activityId = `ACT#${Date.now()}`;

        const params = new PutItemCommand({
            TableName: 'Activities',
            Item: marshall({
                PK: `USER#${userId}#${activityId}`,
                SK: `ACTIVITY#${activityId}`,
                activityId,
                userId,
                supervisorId,
                activityType,
                description,
                status: 'COMPLETADO',
                executionDate,
                registrationDate,
                area
            })
        });

        await client.send(params);
        res.status(201).json({
            success: true,
            message: 'Actividad creada exitosamente'
        });
    } catch (error) {
        console.error('Error al crear actividad:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

// Endpoint para actualizar una actividad
router.put('/:activityId', [
    body('activityType').trim().notEmpty().withMessage('El tipo de actividad es requerido'),
    body('description').trim().notEmpty().withMessage('La descripción es requerida'),
    body('executionDate').trim().notEmpty().withMessage('La fecha de ejecución es requerida')
], validate, async (req, res) => {
    try {
        const { activityId } = req.params;
        const { userId, activityType, description, executionDate } = req.body;

        const params = new UpdateItemCommand({
            TableName: 'Activities',
            Key: {
                PK: { S: `USER#${userId}#${activityId}` },
                SK: { S: `ACTIVITY#${activityId}` }
            },
            UpdateExpression: 'SET #activityType = :activityType, #description = :description, #executionDate = :executionDate',
            ExpressionAttributeNames: {
                '#activityType': 'activityType',
                '#description': 'description',
                '#executionDate': 'executionDate'
            },
            ExpressionAttributeValues: {
                ':activityType': { S: activityType },
                ':description': { S: description },
                ':executionDate': { S: executionDate }
            }
        });

        await client.send(params);
        res.status(200).json({
            success: true,
            message: 'Actividad actualizada exitosamente'
        });
    } catch (error) {
        console.error('Error al actualizar actividad:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

// Endpoint para eliminar una actividad
router.delete('/:activityId', async (req, res) => {
    try {
        const { activityId } = req.params;
        const { userId } = req.query;

        const params = new DeleteItemCommand({
            TableName: 'Activities',
            Key: {
                PK: { S: `USER#${userId}#${activityId}` },
                SK: { S: `ACTIVITY#${activityId}` }
            }
        });

        await client.send(params);
        res.status(200).json({
            success: true,
            message: 'Actividad eliminada exitosamente'
        });
    } catch (error) {
        console.error('Error al eliminar actividad:', error);
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
});

module.exports = router;
