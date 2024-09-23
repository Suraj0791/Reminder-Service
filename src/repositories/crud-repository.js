const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create({
            data: data
        });
        return response;
    }

    async destroy(id) {
        const response = await this.model.delete({
            where: {
                id: id
            }
        });
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(id) {
        const response = await this.model.findUnique({
            where: {
                id: id
            }
        });
        if (!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        const response = await this.model.findMany();
        return response;
    }

    async update(id, data) {
        const response = await this.model.update({
            where: {
                id: id
            },
            data: data
        });
        return response;
    }
}

module.exports = CrudRepository;