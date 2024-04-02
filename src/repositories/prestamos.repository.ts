import { NotFound } from "http-errors";

import database from "../config/database";

import { DatabaseRepository, Id, Query } from "../declarations";
import { Prestamos } from "../entity/Prestamos";

export class PrestamoRepository implements DatabaseRepository<Prestamos> {
  async create(data: Partial<Prestamos>, query?: Query): Promise<Prestamos> {
    const repository = database.getRepository(Prestamos);

    const prestamo = repository.create(data);

    await repository.save(prestamo);

    return prestamo;
  }

  async list(query?: Query): Promise<Prestamos[]> {
    const repository = database.getRepository(Prestamos);

    return repository.find();
  }

  async get(id: Id, query?: Query): Promise<Prestamos> {
    const repository = database.getRepository(Prestamos);

    const task = await repository.findOneBy({ idPrestamos: id as any });
    
    if (!task) {
      throw new NotFound("Task does not exist");
    }

    return task;
  }

  async update(id: Id, data: Prestamos, query?: Query): Promise<Prestamos> {
    const repository = database.getRepository(Prestamos);

    await repository.update(id, data);

    return this.get(id, query);
  }

  async remove(id: Id, query?: Query): Promise<Prestamos> {
    const repository = database.getRepository(Prestamos);

    const task = await this.get(id, query);

    await repository.delete(id);

    return task;
  }
}