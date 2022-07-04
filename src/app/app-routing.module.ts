import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillComponent } from './components/skill/skill.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
