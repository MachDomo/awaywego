import angular from 'angular';
import uirouter from '@uirouter/angularjs';

// import other modules
import CommonModule from './modules/common/common';
import HomeModule from './modules/home/home';
import LoginModule from './modules/login/login';
import SignupModule from './modules/login/signup';
import GroupModule from './modules/group/group';
import MakeGroupModule from './modules/make-group/make-group';
import FriendsModule from './modules/friends/friends';
import CommentsModule from './modules/comments/comments';
import ImportContactsModule from './modules/import-contacts/import-contacts';

// import global services
import UserService from './services/user/user.service';
import FriendService from './services/friend/friend.service';
import MomentService from './services/moment/moment.service';
import ImageSearchService from './services/images/image.search.service';

// import global styles
import './styles/forms.css';

// imports for this component
import appRouting from './app.routing';
import template from './app.html';
import './app.css';

class AppController {
  constructor(UserService) {
    this.UserService = UserService;
  }
}
AppController.$inject = ['UserService'];

const AppComponent = {
  template: template,
  controller: AppController
};

angular.module('app', [
  uirouter,
  CommonModule,
  HomeModule,
  LoginModule,
  SignupModule,
  GroupModule,
  MakeGroupModule,
  FriendsModule,
  CommentsModule,
  ImportContactsModule
])
  .service('UserService', UserService)
  .service('FriendService', FriendService)
  .service('MomentService', MomentService)
  .service('ImageSearchService', ImageSearchService)
  .config(appRouting)
  .component('app', AppComponent);
