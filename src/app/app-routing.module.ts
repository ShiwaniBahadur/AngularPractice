import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './Forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';
import { MessageComponent } from './messages/message/message.component';
import { TestComponent } from './test/test.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'message', component: MessageComponent},
  {path: 'template-driven-form', component: TemplateDrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user', component: EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
