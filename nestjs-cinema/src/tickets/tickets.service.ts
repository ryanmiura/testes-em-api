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

  findOne(id: string): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().findOne({ _id: id }, (err, doc) => {
        if (err) reject(err);
        else if (!doc) reject( new NotFoundException(`Ticket with ID not found.`));
        else resolve(doc);
      });
    });
  }

  update(id: string, ticket: Ticket): Promise<Ticket> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().update({ _id: id }, ticket, {}, (err, numReplaced) => {
        if (err) reject(err);
        else if (numReplaced === 0) reject( new NotFoundException(`Ticket  not found.`));
        else resolve(ticket);
      });
    });
  }

  remove(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.dbService.getTicketDatastore().remove({ _id: id }, {}, (err, numRemoved) => {
        if (err) reject(err);
        else if (numRemoved === 0) reject( new NotFoundException(`Ticket  not found.`));
        else resolve();
      });
    });
  }
}

