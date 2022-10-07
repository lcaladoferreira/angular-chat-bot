import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable()
export class ChatService {
  link: string = '(11)98776-6080';
  constructor() {}

  conversation = new Subject<Message[]>();

  messageMap = {
    Oi: 'Ola, sabe quem eu sou?',
    oi: 'Ola, sabe quem eu sou?',
    opa: 'Opaa, sabe quem eu sou?',
    Opa: 'Opaa, sabe quem eu sou?',
    Olá: 'E ai, sabe quem eu sou?',
    'Olá?': 'E ai, sabe quem eu sou?',
    olá: 'E ai, sabe quem eu sou?',
    'olá?': 'E ai, sabe quem eu sou?',
    '...': 'tres pontos',
    '..': 'dois pontos',
    '.': 'um ponto',
    '': 'Digite o código secreto:',
    'Leandro Calado': `meu whatsapp: ${this.link}`,
    'Quem é você?': 'Eu sou um Chatbot feito em Angular',
    'quem é você?': 'Eu sou um Chatbot feito em Angular',
    'quem é vc?': 'Eu sou um Chatbot feito em Angular',
    'quem é vc': 'Eu sou um Chatbot feito em Angular',
    'O que é Angular': 'Angular é o melhor framework de todos os tempos',
    'o que é angular': 'é o melhor framework de todos os tempos',
    'O que é Angular ?':
      'Angular??? ...é o melhor framework de todos os tempos',
    'O que é Angular?': 'é o melhor framework de todos os tempos',
    'angular?': 'Angular é o melhor',
    'Angular?': 'Angular é o melhor',
    default: 'Não entendi. DICA: pergunte Quem é você ou O que é Angular',
  };

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));

    setTimeout(() => {
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}
