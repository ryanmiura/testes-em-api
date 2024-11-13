import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { DbService } from '../db/db.service';

@Injectable()
export class TicketsService {
  constructor(private readonly dbService: DbService) {}

  async create(ticket: Ticket): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().insert(ticket, (err, newDoc) => {
        if (err) reject(err);
        resolve(newDoc);
      });
    });
  }

  async findAll(): Promise<Ticket[]> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().find({}, (err, docs) => {
        if (err) reject(err);
        resolve(docs);
      });
    });
  }

  async findOne(id: string): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().findOne({ _id: id }, (err, doc) => {
        if (err) reject(err);
        else if (!doc) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        else resolve(doc);
      });
    });
  }

  async update(id: string, ticket: Ticket): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().update({ _id: id }, ticket, {}, (err, numReplaced) => {
        if (err) reject(err);
        else if (numReplaced === 0) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        else resolve(ticket);
      });
    });
  }

  async remove(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) reject(err);
        else if (numRemoved === 0) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        else resolve();
      });
    });
  }
  async findOneOld(id: string): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().findOneOld({ id }, (err, doc) => {
        if (err) reject(err);
        if (!doc) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        resolve(doc);
      });
    });
  }

  async updateOld(id: string, ticket: Ticket): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().updateOld({ id }, ticket, {}, (err, numReplaced) => {
        if (err) reject(err);
        if (numReplaced === 0) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        resolve(ticket);
      });
    });
  }

  async removeOld(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().removeOld({ id }, {}, (err, numRemoved) => {
        if (err) reject(err);
        if (numRemoved === 0) throw new NotFoundException(`Ticket with ID ${id} not found.`);
        resolve();
      });
    });
  }

}

