import {Request, Response} from 'express';
import { getRepository, RepositoryNotFoundError } from 'typeorm';
import {Store} from '../entity/Store';

export async function save(request: Request, response: Response) {
    const StoreRepository = getRepository(Store);    

    const savedStore = await StoreRepository.save(request.body);

    return response.status(200).json(savedStore);
}

export async function getAll(request: Request, response: Response) {
    const StoreRepository = getRepository(Store);    

    const allStores = await StoreRepository.find();

    return response.json(allStores);
}