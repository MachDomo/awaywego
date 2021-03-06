import angular from 'angular';
import moment from 'moment';

// imports for this components
import template from './chat-message.html';
import './chat-message.css';

class ChatMessageController {
  constructor(MomentService) {
    this.moment = MomentService.moment;
  }
}
ChatMessageController.$inject = ['MomentService'];

const ChatMessageComponent = {
  restrict: 'E',
  bindings: {
    'message': '<',
    'self': '<'
  },
  template: template,
  controller: ChatMessageController
};

export default ChatMessageComponent;
