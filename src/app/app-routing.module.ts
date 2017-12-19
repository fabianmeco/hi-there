import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {WrapChatComponent} from './wrap-chat/wrap-chat.component';

const routerForApp: Routes = [
    {path:'', component:LoginComponent},
    {path: 'chat', component: WrapChatComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routerForApp)
    ],exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}