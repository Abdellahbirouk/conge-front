import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  
  {
    path: 'user',
    loadChildren: () => import('../../components/apps/users/users.module').then(m => m.UsersModule)
  },


  {
    path: 'email',
    loadChildren: () => import('../../components/apps/email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/apps/calender/calender.module').then(m => m.CalenderModule)
  }, 
  {
    path: 'contacts',
    loadChildren: () => import('../../components/apps/contacts/contacts.module').then(m => m.ContactsModule)
  },
 



  
 
  

];
