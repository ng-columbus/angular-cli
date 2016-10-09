import { ProfileComponent } from './profile/profile.component'
import { RouterModule } from '@angular/router'

const routes = [
  {path: '', component: ProfileComponent}
]

export default RouterModule.forRoot(routes)
