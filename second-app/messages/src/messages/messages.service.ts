import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// @Injectable marks this class for registration inside
// dependency injection (DI) container (i.e. this class
// can be injected as a dependency into other classes)
// Singleton scope - only one instance of the class is
// created and shared across the entire application
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
